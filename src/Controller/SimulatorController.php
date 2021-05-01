<?php

// src/Controller/AccueilController.php
namespace App\Controller;

use App\Entity\Duree;
use App\Repository\DureeRepository;
use App\Repository\CreditRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SimulatorController extends AbstractController
{
    protected $page;
    protected $credits;


    function __construct(CreditRepository $creditRepository) {
        $this->credits = $creditRepository->findByAscendantFieldActif();
        $this->page = "Simulateur";
    }

    public function index(): Response
    {

        $mensualites = $this->credits[0]->getMensualites()->getValues();

        return $this->render('pages/simulator.html.twig',['page' => $this->page, 'credits' => $this->credits, 'mensualites' => $mensualites]);
    }

    public function showMensualites(Request $request, CreditRepository $creditRepository): Response
    {

        if($request->request->get('some_var_name')){
            //make something curious, get some unbelieveable data
        
            $credit = $creditRepository->find($request->request->get('some_var_name'));

            $durees = array();

            foreach($credit->getMensualites() as $mensualite){
                array_push($durees, $mensualite->getMensualite());
            }
          
            $arrData = [
                'output'        => $request->request->get('some_var_name'),
                'credit'        => $credit->getDesignation(),
                'taux'          => $credit->getTaux(),
                'montant_min'   => $credit->getMontantMin(),
                'montant_max'   => $credit->getMontantMax(),
                'durees'        => $durees
                ];
            
            return new JsonResponse($arrData);

        }


        $mensualites = $this->credits[0]->getMensualites();
       
        return $this->render('pages/simulator.html.twig',['page' => $this->page, 'credits' => $this->credits, 'mensualites' => $mensualites]);
    }


    function CalculVPM($mensualite , $pourcent_annuel , $prix){
        $t_mensuel=$pourcent_annuel/12;
        $t_mensuel = $t_mensuel / 100 ;
        $R=(1-pow((1+$t_mensuel), -$mensualite))/$t_mensuel; 
            
        $VPM=(($prix)/$R); 
            
        return $VPM; 
    }
    

}