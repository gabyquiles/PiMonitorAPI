<?php

namespace App\Repository;

use App\Entity\ConnectionsBandwidth;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ConnectionsBandwidth|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConnectionsBandwidth|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConnectionsBandwidth[]    findAll()
 * @method ConnectionsBandwidth[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConnectionsBandwidthRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ConnectionsBandwidth::class);
    }

//    /**
//     * @return ConnectionsBandwidth[] Returns an array of ConnectionsBandwidth objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ConnectionsBandwidth
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
