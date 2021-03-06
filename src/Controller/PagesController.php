<?php
// src/Controller/PagesController.php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\Turbo\Stream\TurboStreamResponse;

final class PagesController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function home(): Response
    {
        return $this->render('pages/home.html.twig');
    }

    #[Route('/simulateur', name: 'app_simulator')]
    public function simulator(): Response
    {
        return $this->render('pages/simulator.html.twig');
    }

    #[Route('/demande-de-prêt', name: 'app_request')]
    public function request(): Response
    {
        return $this->render('pages/request.html.twig');
    }

    #[Route('/a-propos', name: 'app_about')]
    public function about(): Response
    {
        return $this->render('pages/about.html.twig');
    }


    #[Route('/conditions', name: 'app_conditions')]
    public function conditions(): Response
    {
        return $this->render('pages/conditions_generales.html.twig');
    }
}