import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Calendar, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

//todo: remove mock functionality
const mockEvents = [
  {
    id: 1,
    eventName: "Annual Day 2025",
    eventDate: "2025-03-15",
    description: "Cultural program and prize distribution",
    eventRecords: JSON.stringify([
      { participant: "Rahul Sharma", activity: "Dance", award: "First Prize" },
      { participant: "Priya Patel", activity: "Singing", award: "Second Prize" },
      { participant: "Amit Kumar", activity: "Drama", award: "Participation" },
    ]),
  },
  {
    id: 2,
    eventName: "Sports Day",
    eventDate: "2025-04-10",
    description: "Annual sports competition",
    eventRecords: JSON.stringify([
      { athlete: "Sneha Reddy", event: "100m Race", position: "1st" },
      { athlete: "Vikram Singh", event: "Long Jump", position: "2nd" },
    ]),
  },
];

export default function Events() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [viewingEvent, setViewingEvent] = useState<typeof mockEvents[0] | null>(null);
  const [jsonInput, setJsonInput] = useState("");

  const parseEventRecords = (recordsJson: string) => {
    try {
      return JSON.parse(recordsJson);
    } catch {
      return [];
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events</h1>
          <p className="text-muted-foreground mt-1">
            Manage school events and record sheets
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-event">
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
              <DialogDescription>
                Create a new event with details and record sheet
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="eventName">Event Name</Label>
                <Input
                  id="eventName"
                  placeholder="Annual Day 2025"
                  data-testid="input-event-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventDate">Event Date</Label>
                <Input
                  id="eventDate"
                  type="date"
                  data-testid="input-event-date"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Event description..."
                  data-testid="textarea-description"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="records">Event Records (JSON)</Label>
                <Textarea
                  id="records"
                  placeholder='[{"name": "John", "activity": "Dance"}]'
                  className="font-mono text-sm"
                  rows={6}
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  data-testid="textarea-event-records"
                />
                <p className="text-xs text-muted-foreground">
                  Paste structured JSON data for event records
                </p>
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
                  console.log("Add event triggered with JSON:", jsonInput);
                  setIsAddDialogOpen(false);
                  setJsonInput("");
                }}
                data-testid="button-save-event"
              >
                Save Event
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockEvents.map((event) => (
          <Card key={event.id} className="hover-elevate" data-testid={`card-event-${event.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <CardTitle className="text-base">{event.eventName}</CardTitle>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(event.eventDate).toLocaleDateString()}
                  </div>
                </div>
                <Badge>Scheduled</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{event.description}</p>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => setViewingEvent(event)}
                data-testid={`button-view-records-${event.id}`}
              >
                <Eye className="h-3 w-3 mr-2" />
                View Records
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={viewingEvent !== null} onOpenChange={() => setViewingEvent(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{viewingEvent?.eventName}</DialogTitle>
            <DialogDescription>
              Event records and participant details
            </DialogDescription>
          </DialogHeader>
          {viewingEvent && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Date:</span>{" "}
                  <span className="font-medium">
                    {new Date(viewingEvent.eventDate).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Type:</span>{" "}
                  <Badge variant="secondary">School Event</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  {viewingEvent.description}
                </p>
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        {Object.keys(parseEventRecords(viewingEvent.eventRecords)[0] || {}).map(
                          (key) => (
                            <TableHead key={key} className="font-semibold">
                              {key.charAt(0).toUpperCase() + key.slice(1)}
                            </TableHead>
                          )
                        )}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {parseEventRecords(viewingEvent.eventRecords).map(
                        (record: any, index: number) => (
                          <TableRow key={index}>
                            {Object.values(record).map((value: any, i) => (
                              <TableCell key={i}>{value}</TableCell>
                            ))}
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
