<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\DureeRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass=DureeRepository::class)
 */
class Duree
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @ORM\OrderBy({"mensualite" = "ASC"})
     */
    private $mensualite;

    /**
     * @ORM\ManyToMany(targetEntity=Credit::class, mappedBy="mensualites")
     */
    private $credits;

    public function __construct()
    {
        $this->credits = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMensualite(): ?int
    {
        return $this->mensualite;
    }

    public function setMensualite(int $mensualite): self
    {
        $this->mensualite = $mensualite;

        return $this;
    }

    /**
     * @return Collection|Credit[]
     */
    public function getCredits(): Collection
    {
        return $this->credits;
    }

    public function addCredit(Credit $credit): self
    {
        if (!$this->credits->contains($credit)) {
            $this->credits[] = $credit;
            $credit->addMensualite($this);
        }

        return $this;
    }

    public function removeCredit(Credit $credit): self
    {
        if ($this->credits->removeElement($credit)) {
            $credit->removeMensualite($this);
        }

        return $this;
    }

    public function __toString()
    {
        return ' ' . $this->mensualite . '';
    } 
}
