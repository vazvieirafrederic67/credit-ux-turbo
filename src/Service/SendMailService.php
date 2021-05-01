<?PHP

// src/Service/SendMailPhpService.php
namespace App\Service;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use App\Entity\Contact;
use App\Entity\DemandeCredit;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;

class SendMailService
{

    private $mailer;

    public function __construct( MailerInterface $mailer )
    {
        $this->mailer = $mailer;
    }

    public function sendMailContact(Contact $formSend)
    {

        $email = (new TemplatedEmail())
        ->from('monsiteeuropeen@gmail.com')
        ->to($formSend->getEmail())
        ->subject('Nouvelle demande - Formulaire de contact')
        ->text('Nouvelle demande - Formulaire de contact')
        ->htmlTemplate('emails/contact.html.twig')
        ->context([
            'formSend' => $formSend
        ]);

        $this->mailer->send($email);

    }

    public function sendMailRequest(DemandeCredit $formSend)
    {

        $email = (new TemplatedEmail())
        ->from('monsiteeuropeen@gmail.com')
        ->to($formSend->getEmail())
        ->subject('Nouvelle demande - Demande de prêt')
        ->text('Nouvelle demande - Demande de prêt')
        ->htmlTemplate('emails/request.html.twig')
        ->context([
            'formSend' => $formSend
        ]);

        $this->mailer->send($email);

    }
}