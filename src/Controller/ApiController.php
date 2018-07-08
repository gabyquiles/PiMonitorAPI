<?php

namespace App\Controller;

use App\Repository\ConnectionsBandwidthRepository;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;

class ApiController extends FOSRestController
{
    /**
     * @Rest\Route("/bandwidth")
     */
    public function getBandwidthAction(ConnectionsBandwidthRepository $repository)
    {
        $bandwidths = $repository->findBy(array(), array('date' => 'DESC'), 48);
        $view = $this->view($bandwidths, 200);
        return $this->handleView($view);
    }
}
