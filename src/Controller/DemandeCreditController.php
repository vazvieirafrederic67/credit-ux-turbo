<?php

// src/Controller/ContactController.php
namespace App\Controller;


use App\Entity\DemandeCredit;
use App\Form\DemandeCreditType;
use App\Service\SendMailService;
use App\Repository\CreditRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\UX\Turbo\Stream\TurboStreamResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class DemandeCreditController extends AbstractController
{
    protected $page;
    protected $credits;

    function __construct(CreditRepository $creditRepository) {
        $this->credits = $creditRepository->findByAscendantFieldActif();
        $this->page = "Demande de credit";
    }

    public function index(SendMailService $mailService, Request $request, CreditRepository $creditRepository): Response
    {
        $mensualites = $this->credits[0]->getMensualites()->getValues();

        $demandeCredit = new DemandeCredit();
        $form = $this->createForm(DemandeCreditType::class, $demandeCredit);
        $blankForm = clone $form;
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            $contactName = $form->get('firstname')->getData();

            if (TurboStreamResponse::STREAM_FORMAT === $request->getPreferredFormat()) {
               
                $formSend = $form->getData();

                $credit = $creditRepository->find($demandeCredit->getTypeDeCredit());
                $demandeCredit->setTypeDeCredit($credit->getDesignation());
                $mailService->sendMailRequest($demandeCredit);
                
                $content =  $this->renderView('contact/_success_request_form.stream.html.twig', [
                    'contactName' => $contactName,
                    'form' => $blankForm->createView(),
                    'page' => $this->page,
                    'credits' => $this->credits, 
                    'mensualites' => $mensualites
                ]);

                return new Response($content, 200);
            }

            $formSend = $form->getData();
            $credit = $creditRepository->find($demandeCredit->getTypeDeCredit());
            $demandeCredit->setTypeDeCredit($credit->getDesignation());

            $mailService->sendMailRequest($demandeCredit);
           
            $this->addFlash('success', $formSend->getFirstname().', votre message a bien été envoyer!');

            return $this->redirectToRoute('app_request', [], Response::HTTP_SEE_OTHER);
        }

        if ($form->isSubmitted() && !$form->isValid()) {
         
            $content = $this->renderView('pages/request.html.twig',[
                'page' => $this->page ,
                'form' => $form->createView(), 
                'credits' => $this->credits, 
                'mensualites' => $mensualites
            ]);

            return new Response($content, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        return $this->render('pages/request.html.twig',[
            'page' => $this->page ,
            'form' => $form->createView(), 
            'credits' => $this->credits, 
            'mensualites' => $mensualites
        ]);
    }
}