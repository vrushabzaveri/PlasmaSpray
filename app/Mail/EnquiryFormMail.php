<?php

namespace App\Mail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;


class EnquiryFormMail extends Mailable
{
    use Queueable, SerializesModels;

  

    /**
     * Create a new message instance.
     */
    public function __construct($data){
        $this->data = $data;
    }

     /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Enquiry From Enquiry Form',
        );
    }


       /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.enquiry_form')
                    ->with('data', $this->data);
    }

}
