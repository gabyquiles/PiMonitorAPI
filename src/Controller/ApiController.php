<?php

namespace App\Controller;

use App\Entity\ConnectionsBandwidth;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends FOSRestController
{
    /**
     * @Route("/api", name="api")
     */
    public function index()
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

    public function getBandwidthAction()
    {
        $repository = $this->getDoctrine()->getRepository(ConnectionsBandwidth::class);
        $bandwidths = $repository->findBy(array(), array('date' => 'DESC'), 48);
        $view = $this->view($bandwidths, 200);
        return $this->handleView($view);
    }
}
