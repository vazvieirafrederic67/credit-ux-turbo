<?php

namespace App\Form;


use App\Entity\Duree;
use App\Entity\Credit;
use App\Entity\DemandeCredit;
use Doctrine\ORM\EntityRepository;
use App\Repository\CreditRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class DemandeCreditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('lastname', TextType::class, [
                'required'   => false,
                'label' => false,
                'attr' => ['placeholder' => 'Nom de famille'],
            ])
            ->add('firstname', TextType::class, [
                'required'   => false,
                'label' => false,
                'attr' => ['placeholder' => 'Prénom'],
            ])
            ->add('phonenumber', NumberType::class, [
                'required'   => false,
                'label' => false,
                'attr' => ['placeholder' => 'Numéro de téléphone'],
            ])
            ->add('email', EmailType::class, [
                'required'   => false,
                'label' => false,
                'attr' => ['placeholder' => 'Email'],
            ])
            ->add('dateDeNaissance', DateType::class, [
                'widget' => 'single_text',
                'html5' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'Date de naissance',
                    'class' => 'js-datepicker',
                ],
                'format' => 'dd-MM-yyyy',
            ])
            ->add('codepostal', NumberType::class, [
                'required'   => false,
                'label' => false,
                'attr' => ['placeholder' => 'Code postal'],
            ])
            ->add('pays', ChoiceType::class, [
                'label' => false,
                'choices' => [
                    'Choisir un pays' => '-',
                    'Luxembourg' => 'lu',
                    'Belgique' => 'be',
                ],
            ])
            ->add('message', TextareaType::class, [
                'required'   => false,
                'label' => false,
                'attr' => ['placeholder' => 'Expliquez votre projet'],
            ])
            ->add('dureeDuPret', TextType::class, [
                'required'   => false,
                'label' => false,
            ])
            ->add('typeDeCredit', TextType::class, [
                'required'   => false,
                'label' => false,
            ])
            ->add('montantAEmprunter', TextType::class, [
                'required'   => false,
                'label' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => DemandeCredit::class,
            'attr'      => ['autocomplete' => 'off']
        ]);
    }
}