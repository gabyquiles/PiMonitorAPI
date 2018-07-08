<?php

namespace App\Controller;

use App\Entity\ConnectionsBandwidth;
use FOS\RestBundle\Controller\FOSRestController;

class ApiController extends FOSRestController
{
    public function getBandwidthAction()
    {
        $repository = $this->getDoctrine()->getRepository(ConnectionsBandwidth::class);
        $bandwidths = $repository->findBy(array(), array('date' => 'DESC'), 48);
        $view = $this->view($bandwidths, 200);
        return $this->handleView($view);
    }
}
