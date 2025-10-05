import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Bus, User, Users } from "lucide-react";

//todo: remove mock functionality
const mockRoutes = [
  {
    id: "RT001",
    routeName: "North Zone Route",
    driverId: "STF002",
    driverName: "Mr. Suresh Patel",
    capacity: 40,
    assignedStudents: ["ADM001", "ADM003", "ADM005"],
  },
  {
    id: "RT002",
    routeName: "South Zone Route",
    driverId: "STF006",
    driverName: "Mr. Raj Kumar",
    capacity: 35,
    assignedStudents: ["ADM002", "ADM004"],
  },
  {
    id: "RT003",
    routeName: "East Zone Route",
    driverId: "STF002",
    driverName: "Mr. Suresh Patel",
    capacity: 30,
    assignedStudents: ["ADM006"],
  },
];

//todo: remove mock functionality
const mockDrivers = [
  { id: "STF002", name: "Mr. Suresh Patel" },
  { id: "STF006", name: "Mr. Raj Kumar" },
];

export default function Transport() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transport</h1>
          <p className="text-muted-foreground mt-1">
            Manage bus routes and student assignments
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-route">
              <Plus className="h-4 w-4 mr-2" />
              Add Route
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Route</DialogTitle>
              <DialogDescription>
                Create a new transport route with driver assignment
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="routeId">Route ID</Label>
                <Input
                  id="routeId"
                  placeholder="RT001"
                  data-testid="input-route-id"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="routeName">Route Name</Label>
                <Input
                  id="routeName"
                  placeholder="North Zone Route"
                  data-testid="input-route-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="driver">Assign Driver</Label>
                <Select>
                  <SelectTrigger data-testid="select-driver">
                    <SelectValue placeholder="Select driver" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockDrivers.map((driver) => (
                      <SelectItem key={driver.id} value={driver.id}>
                        {driver.name} ({driver.id})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Bus Capacity</Label>
                <Input
                  id="capacity"
                  type="number"
                  placeholder="40"
                  data-testid="input-capacity"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
                data-testid="button-cancel"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  console.log("Add route triggered");
                  setIsAddDialogOpen(false);
                }}
                data-testid="button-save-route"
              >
                Add Route
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockRoutes.map((route) => (
          <Card key={route.id} className="hover-elevate" data-testid={`card-route-${route.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Bus className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{route.routeName}</CardTitle>
                    <p className="text-sm font-mono text-muted-foreground">{route.id}</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1">
                  <p className="font-medium">{route.driverName}</p>
                  <p className="text-xs text-muted-foreground">Driver</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Capacity:</span>
                <span className="font-semibold">{route.capacity} seats</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Assigned:</span>
                <Badge variant="secondary">
                  <Users className="h-3 w-3 mr-1" />
                  {route.assignedStudents.length} students
                </Badge>
              </div>
              <div className="pt-2">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Occupancy</span>
                  <span>
                    {((route.assignedStudents.length / route.capacity) * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-chart-1 transition-all"
                    style={{
                      width: `${(route.assignedStudents.length / route.capacity) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => console.log("Manage students for route:", route.id)}
                data-testid={`button-manage-${route.id}`}
              >
                Manage Students
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
