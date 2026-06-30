import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "lucide-react"
import { TrackingMap } from "@/components/dashboard/tracking-map"
import { ShowroomLocationCard } from "@/components/dashboard/showroom-location-card"

export default async function TrackingPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Get active bookings with vehicle location data
  const { data: activeBookings } = await supabase
    .from("bookings")
    .select("*, vehicles(id, name, plate_number, latitude, longitude, gps_device_id)")
    .eq("user_id", user!.id)
    .in("status", ["active", "confirmed"])

  const trackedVehicles =
    activeBookings
      ?.filter(
        (b: any) =>
          b.vehicles?.latitude != null && b.vehicles?.longitude != null
      )
      .map((b: any) => ({
        id: b.vehicles.id,
        name: b.vehicles.name,
        plate_number: b.vehicles.plate_number,
        latitude: b.vehicles.latitude,
        longitude: b.vehicles.longitude,
      })) || []

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-2xl font-bold text-foreground">
          Track Showroom Location
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Visit the showroom location and view nearby tracking details
        </p>
      </div>

      {trackedVehicles.length > 0 && (
        <>
          {/* Vehicle list */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trackedVehicles.map((vehicle: any) => (
              <Card key={vehicle.id}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    {vehicle.name}
                  </CardTitle>
                  <Badge variant="default">Active</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    {vehicle.plate_number}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                    <Navigation className="h-3 w-3" />
                    <span>
                      {vehicle.latitude.toFixed(4)}, {vehicle.longitude.toFixed(4)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map */}
          <TrackingMap vehicles={trackedVehicles} />
        </>
      )}

      <ShowroomLocationCard />
    </div>
  )
}
