<?php

// src/Controller/ContactController.php
namespace App\Controller;


use App\Entity\Contact;
use App\Form\ContactType;
use App\Service\SendMailService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\UX\Turbo\Stream\TurboStreamResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ContactController extends AbstractController
{
    protected $page;

    function __construct() {
        $this->page = "Contact";
    }

    public function contact(SendMailService $mailService, Request $request): Response
    {
        $contact = new Contact;
        $form = $this->createForm(ContactType::class, $contact);
        $blankForm = clone $form;
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $contactName = $form->get('firstname')->getData();


            if (TurboStreamResponse::STREAM_FORMAT === $request->getPreferredFormat()) {
                
                $formSend = $form->getData();
                $mailService->sendMailContact($contact);
                
                return $this->render('contact/_success_contact_form.stream.html.twig', [
                    'contactName' => $contactName,
                    'form' => $blankForm->createView(),
                    'page' => $this->page,
                ], new TurboStreamResponse());
            }


            $formSend = $form->getData();

            $mailService->sendMailContact($contact);
           
            $this->addFlash('success', $formSend->getFirstname().', votre message a bien été envoyer!');

            return $this->redirectToRoute('app_contact', [], Response::HTTP_SEE_OTHER);
        }

        if ($form->isSubmitted() && !$form->isValid()) {

            $content = $this->renderView('pages/contact.html.twig',[
                'page' => $this->page ,
                'form' => $form->createView(), 
            ]);

            return new Response($content, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        return $this->render('pages/contact.html.twig',[
            'page' => $this->page ,
            'form' => $form->createView(),
        ]);
    }
}