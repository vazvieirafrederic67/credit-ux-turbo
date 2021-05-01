<?php

namespace App\Form;

use App\Entity\Duree;
use App\Entity\Credit;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

class CreditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('designation')
            ->add('actif')
            ->add('montant_min')
            ->add('montant_max')
            ->add('taux', NumberType::class, [
                'scale' => 4,
            ])
            ->add('mensualites', EntityType::class, [
                'class' => Duree::class,
                'choice_label' => 'mensualite',
                'multiple' => true,
                'expanded' => true, 
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                        ->orderBy('u.mensualite', 'ASC');
                },
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Credit::class,
        ]);
    }
}
