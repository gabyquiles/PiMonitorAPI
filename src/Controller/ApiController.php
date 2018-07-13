<?php

namespace App\Controller;

use App\Repository\ConnectionsBandwidthRepository;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\Finder\Finder;

class ApiController extends FOSRestController
{
    /**
     * @Rest\Route("/bandwidth")
     */
    public function getBandwidthAction(ConnectionsBandwidthRepository $repository)
    {
        // Show last 2 days
        $bandwidths = $repository->findBy(array(), array('date' => 'DESC'), 96);
        $view = $this->view($bandwidths, 200);
        return $this->handleView($view);
    }

    /**
     * @Rest\Route("/images")
     */
    public function getImagesAction()
    {
        $imagesPublicFolder = '/images/';

        $projectDir = $this->container->get("kernel")->getProjectDir();
        $imagesFolder = $projectDir . '/public' . $imagesPublicFolder;

        $finder = new Finder();
        $finder->files()->name('*.jpg')->name('*.jpeg')->in($imagesFolder);
        $images = array();
        foreach ($finder as $file) {
            $images[] = $imagesPublicFolder . $file->getBasename();
        }

        $view = $this->view($images, 200);
        return $this->handleView($view);
    }
}
