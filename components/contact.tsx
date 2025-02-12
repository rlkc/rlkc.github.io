import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white bg-opacity-90">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-6">
            <Input type="text" placeholder="Your Name" />
          </div>
          <div className="mb-6">
            <Input type="email" placeholder="Your Email" />
          </div>
          <div className="mb-6">
            <Textarea placeholder="Your Message" rows={4} />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

