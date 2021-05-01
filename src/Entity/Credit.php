<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\OrderBy;
use App\Repository\CreditRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass=CreditRepository::class)
 */
class Credit
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $designation;

    /**
     * @ORM\Column(type="boolean")
     */
    private $actif;

    /**
     * @ORM\Column(type="integer")
     */
    private $montant_min;

    /**
     * @ORM\Column(type="integer")
     */
    private $montant_max;

    /**
     * @ORM\Column(type="float")
     */
    private $taux;

    /**
     * @ORM\ManyToMany(targetEntity=Duree::class, inversedBy="credits")
     * @OrderBy({"mensualite" = "ASC"})
     */
    private $mensualites;

    public function __construct()
    {
        $this->mensualites = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(string $designation): self
    {
        $this->designation = $designation;

        return $this;
    }

    public function getActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): self
    {
        $this->actif = $actif;

        return $this;
    }

    public function getMontantMin(): ?int
    {
        return $this->montant_min;
    }

    public function setMontantMin(int $montant_min): self
    {
        $this->montant_min = $montant_min;

        return $this;
    }

    public function getMontantMax(): ?int
    {
        return $this->montant_max;
    }

    public function setMontantMax(int $montant_max): self
    {
        $this->montant_max = $montant_max;

        return $this;
    }

    public function getTaux(): ?float
    {
        return $this->taux;
    }

    public function setTaux(float $taux): self
    {
        $this->taux = $taux;

        return $this;
    }

    public function __toString()
    {
        return $this->designation;
    }

    /**
     * @return Collection|Duree[]
     */
    public function getMensualites(): Collection
    {
        return $this->mensualites;
    }

    public function addMensualite(Duree $mensualite): self
    {
        if (!$this->mensualites->contains($mensualite)) {
            $this->mensualites[] = $mensualite;
        }

        return $this;
    }

    public function removeMensualite(Duree $mensualite): self
    {
        $this->mensualites->removeElement($mensualite);

        return $this;
    }
}
