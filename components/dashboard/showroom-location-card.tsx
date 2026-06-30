import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation } from "lucide-react"

export function ShowroomLocationCard() {
  return (
    <Card className="overflow-hidden border-border/60 bg-gradient-to-br from-background via-background to-muted/20 shadow-[0_10px_40px_-12px_rgba(15,23,42,0.2)]">
      <CardHeader className="border-b border-border/60 bg-background/70 backdrop-blur-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <CardTitle className="font-serif text-lg text-foreground">
              Royal Motors and Rent a Car Lahore
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Visit the showroom for vehicle pickup, support, and assistance.
            </p>
          </div>
          <Badge
            variant="secondary"
            className="w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary"
          >
            <Navigation className="mr-1 h-3.5 w-3.5" />
            Directions
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-3 sm:p-4">
        <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-border/60 bg-secondary/70 shadow-inner sm:h-[420px]">
          <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-background/90 px-3 py-2 shadow-sm backdrop-blur">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Showroom Location
            </span>
          </div>

          <iframe
            title="Royal Motors and Rent a Car Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108895.08817801288!2d74.09528331640622!3d31.46997000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffd1acc891d9%3A0x26482b55090c54db!2sRoyal%20Motors%20and%20Rent%20a%20Car%20Lahore!5e0!3m2!1sen!2s!4v1782820932856!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-full w-full"
          />
        </div>
      </CardContent>
    </Card>
  )
}
