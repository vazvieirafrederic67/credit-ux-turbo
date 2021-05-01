<?php

namespace App\Form;

use App\Entity\Contact;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactType extends AbstractType
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
            ->add('message', TextareaType::class, [
                'required'   => false,
                'label' => false,
                'attr' => ['placeholder' => 'Message'],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}