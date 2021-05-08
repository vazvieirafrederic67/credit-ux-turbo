<?php

// src/Entity/DemandeCredit.php
namespace App\Entity;


use Symfony\Component\Validator\Constraints as Assert;


class DemandeCredit
{

     /**
     * @Assert\NotBlank(message="Ce champs est obligatoire.")
     * @Assert\Length(
     *      min = 3,
     *      max = 50,
     *      minMessage = "minimum {{ limit }} caractères",
     *      maxMessage = "maximum {{ limit }} charactères"
     * )
     */
    protected $lastname;

     /**
    * @Assert\NotBlank(message="Ce champs est obligatoire.")
     * @Assert\Length(
     *      min = 3,
     *      max = 50,
     *      minMessage = "minimum {{ limit }} caractères",
     *      maxMessage = "maximum {{ limit }} charactères"
     * )
     */
    protected $firstname;

    /**
    * @Assert\NotBlank(message="Ce champs est obligatoire.")
    * @Assert\Length(min=8)
    * @Assert\Range(
    *      min = 0,
    *      max = 999999999,
    *      notInRangeMessage = "Le nombre doit etre entre {{ min }} et {{ max }}",
    * )
    */
    protected $phonenumber;

    /**
    * @Assert\NotBlank(message="Ce champs est obligatoire.")
    * @Assert\Email(
    *     message = "L'email '{{ value }}' n'est pas valide."
    * )
    */
    protected $email;

    /**
     * @Assert\NotBlank(message="Ce champs est obligatoire.")
     * @Assert\Length(
     *      min = 6,
     *      max = 250,
     *      minMessage = "minimum {{ limit }} caractères",
     *      maxMessage = "maximum {{ limit }} charactères"
     * )
     */
    protected $message;

    protected $dateDeNaissance;

    /**
    * @Assert\NotBlank(message="Ce champs est obligatoire.")
    * @Assert\Range(
    *      min = 1000,
    *      max = 99999,
    *      notInRangeMessage = "Le nombre doit etre entre {{ min }} et {{ max }}",
    * )
    */
    protected $codepostal;

    /**
    * @Assert\NotBlank(message="Ce champs est obligatoire.")
    * @Assert\Length(
    *   min = 2,
    *   minMessage = "Selectionnez un pays."
    *   )
    */
    protected $pays;


    protected $dureeDuPret;

    protected $typeDeCredit;

    protected $montantAEmprunter;


    public function getLastname(): string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): void
    {
        $this->lastname = $lastname;
    }


    public function getFirstname(): string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): void
    {
        $this->firstname = $firstname;
    }

    public function getPhoneNumber(): ?int
    {
        return $this->phonenumber;
    }

    public function setPhoneNumber(int $phonenumber)
    {
        $this->phonenumber = $phonenumber;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email)
    {
        $this->email = $email;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function setMessage(string $message): void
    {
        $this->message = $message;
    }

    public function getDateDeNaissance()
    {
        return $this->dateDeNaissance;
    }

    public function setDateDeNaissance($dateDeNaissance)
    {
        $this->dateDeNaissance = $dateDeNaissance;
    }
   
    public function getCodePostal()
    {
        return $this->codepostal;
    }

    public function setCodePostal($codepostal)
    {
        $this->codepostal = $codepostal;
    }

    public function getPays()
    {
        return $this->pays;
    }

    public function setPays($pays)
    {
        $this->pays = $pays;
    }

    public function getDureeDuPret()
    {
        return $this->dureeDuPret;
    }

    public function setDureeDuPret($dureeDuPret)
    {
        $this->dureeDuPret = $dureeDuPret;
    }

    public function getTypeDeCredit()
    {
        return $this->typeDeCredit;
    }

    public function setTypeDeCredit($typeDeCredit)
    {
        $this->typeDeCredit = $typeDeCredit;
    }

    public function getMontantAEmprunter()
    {
        return $this->montantAEmprunter;
    }

    public function setMontantAEmprunter($montantAEmprunter)
    {
        $this->montantAEmprunter = $montantAEmprunter;
    }
}