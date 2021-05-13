<?php

namespace App\Controller;


use App\Entity\Duree;
use App\Entity\Credit;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SitemapController extends AbstractController
{
    /**
     * @Route("/sitemap.xml", name="app_sitemap")

     */
    public function index(Request $request): Response
    {
        $hostname = $request->getSchemeAndHttpHost();

        //Urls statiques
        $urls = [];
        
        $urls[] = ['loc' => $this->generateUrl('app_homepage')];
        $urls[] = ['loc' => $this->generateUrl('app_simulator')];
        $urls[] = ['loc' => $this->generateUrl('app_request')];
        $urls[] = ['loc' => $this->generateUrl('app_about')];
        $urls[] = ['loc' => $this->generateUrl('app_contact')];
        $urls[] = ['loc' => $this->generateUrl('app_conditions')];
        $urls[] = ['loc' => $this->generateUrl('show_credit')];
        $urls[] = ['loc' => $this->generateUrl('credit_index')];
        $urls[] = ['loc' => $this->generateUrl('credit_new')];
        $urls[] = ['loc' => $this->generateUrl('duree_index')];
        $urls[] = ['loc' => $this->generateUrl('duree_new')];
        $urls[] = ['loc' => $this->generateUrl('app_login')];
        $urls[] = ['loc' => $this->generateUrl('app_logout')];
        

        //Urls dynamiques
        foreach($this->getDoctrine()->getRepository(Credit::class)->findAll() as $credit){
            $urls[] = ['loc' => $this->generateUrl( 'credit_show' , [ 'id' => $credit->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'credit_edit' , [ 'id' => $credit->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'credit_delete' , [ 'id' => $credit->getId()])];
        }

        foreach($this->getDoctrine()->getRepository(Duree::class)->findAll() as $duree){
            $urls[] = ['loc' => $this->generateUrl( 'duree_show' , [ 'id' => $duree->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'duree_edit' , [ 'id' => $duree->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'duree_delete' , [ 'id' => $duree->getId()])];
        }

        
        $response = new Response(
            $this->renderView('sitemap/index.html.twig',[
                'urls' => $urls,
                'hostname' => $hostname
            ]),
            200
        );

        $response->headers->set( 'Content-type' , 'text/xml' );

        return $response;
    }
}
