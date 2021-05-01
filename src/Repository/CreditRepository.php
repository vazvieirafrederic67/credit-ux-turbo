<?php

namespace App\Repository;

use App\Entity\Credit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Credit|null find($id, $lockMode = null, $lockVersion = null)
 * @method Credit|null findOneBy(array $criteria, array $orderBy = null)
 * @method Credit[]    findAll()
 * @method Credit[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CreditRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Credit::class);
    }

    /**
    * @return Credit[] Returns an array of Credit objects
    */
    public function findByAscendantField()
    {
        return $this->createQueryBuilder('c')
            ->orderBy('c.designation', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }

     /**
    * @return Credit[] Returns an array of Credit objects
    */
    public function findByAscendantFieldActif()
    {
        return $this->createQueryBuilder('c')
            ->orderBy('c.designation', 'ASC')
            ->where('c.actif = 1')
            ->getQuery()
            ->getResult()
        ;
    }

    /*
    public function findAllJoinField()
    {
        return $this->createQueryBuilder('c')
            ->select('c.id', 'c.designation', 'c.actif', 'c.montant_min', 'c.montant_max', 'c.taux', 'd.id')
            ->innerJoin('c.id', 'd' , 'WITH' , 'd.credit_duree', ':credit_duree')
            ->getQuery()
            ->getResult()
        ;
    }
    */
    
}
