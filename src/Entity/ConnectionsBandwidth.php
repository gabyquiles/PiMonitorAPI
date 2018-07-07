<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ConnectionsBandwidthRepository")
 */
class ConnectionsBandwidth
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="timestamp", options={"default": "CURRENT_TIMESTAMP"})
     */
    private $date;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $interface;

    /**
     * @ORM\Column(type="integer")
     */
    private $bytes_received;

    /**
     * @ORM\Column(type="integer")
     */
    private $bytes_sent;

    /**
     * @ORM\Column(type="float")
     */
    private $download;

    /**
     * @ORM\Column(type="float")
     */
    private $upload;

    /**
     * @ORM\Column(type="float")
     */
    private $ping;

    /**
     * @ORM\Column(type="string", length=15)
     */
    private $ip;

    /**
     * @ORM\Column(type="float")
     */
    private $lat;

    /**
     * @ORM\Column(type="float")
     */
    private $lon;

    private $server;

    public function getId()
    {
        return $this->id;
    }

    public function getDate(): ?\DateTime
    {
        return $this->date;
    }

    public function setDate(\DateTime $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getInterface(): ?string
    {
        return $this->interface;
    }

    public function setInterface(string $interface): self
    {
        $this->interface = $interface;

        return $this;
    }

    public function getBytesReceived(): ?int
    {
        return $this->bytes_received;
    }

    public function setBytesReceived(int $bytes_received): self
    {
        $this->bytes_received = $bytes_received;

        return $this;
    }

    public function getBytesSent(): ?int
    {
        return $this->bytes_sent;
    }

    public function setBytesSent(int $bytes_sent): self
    {
        $this->bytes_sent = $bytes_sent;

        return $this;
    }

    public function getDownload(): ?float
    {
        return $this->download;
    }

    public function setDownload(float $download): self
    {
        $this->download = $download;

        return $this;
    }

    public function getUpload(): ?float
    {
        return $this->upload;
    }

    public function setUpload(int $upload): self
    {
        $this->upload = $upload;

        return $this;
    }

    public function getPing(): ?float
    {
        return $this->ping;
    }

    public function setPing(float $ping): self
    {
        $this->ping = $ping;

        return $this;
    }

    public function getIp(): ?string
    {
        return $this->ip;
    }

    public function setIp(string $ip): self
    {
        $this->ip = $ip;

        return $this;
    }

    public function getLat(): ?float
    {
        return $this->lat;
    }

    public function setLat(float $lat): self
    {
        $this->lat = $lat;

        return $this;
    }

    public function getLon(): ?float
    {
        return $this->lon;
    }

    public function setLon(float $lon): self
    {
        $this->lon = $lon;

        return $this;
    }
}
