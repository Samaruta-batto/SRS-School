import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Check, X, Users } from "lucide-react";

//todo: remove mock functionality
const mockStudents = [
  { id: "ADM001", name: "Rahul Sharma", grade: "10th", status: "present" as "present" | "absent" },
  { id: "ADM002", name: "Priya Patel", grade: "9th", status: "present" as "present" | "absent" },
  { id: "ADM003", name: "Amit Kumar", grade: "11th", status: "absent" as "present" | "absent" },
  { id: "ADM004", name: "Sneha Reddy", grade: "12th", status: "present" as "present" | "absent" },
  { id: "ADM005", name: "Vikram Singh", grade: "8th", status: "present" as "present" | "absent" },
  { id: "ADM006", name: "Anjali Verma", grade: "10th", status: "absent" as "present" | "absent" },
];

export default function Attendance() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [students, setStudents] = useState(mockStudents);

  const toggleAttendance = (id: string) => {
    setStudents(
      students.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "present" ? "absent" : "present" }
          : s
      )
    );
    console.log(`Toggled attendance for ${id}`);
  };

  const markAllPresent = () => {
    setStudents(students.map((s) => ({ ...s, status: "present" as const })));
    console.log("Marked all students present");
  };

  const presentCount = students.filter((s) => s.status === "present").length;
  const absentCount = students.length - presentCount;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
        <p className="text-muted-foreground mt-1">
          Track daily student attendance
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 gap-2 flex-wrap">
            <CardTitle>Daily Attendance</CardTitle>
            <Button
              size="sm"
              onClick={markAllPresent}
              data-testid="button-mark-all-present"
            >
              <Users className="h-4 w-4 mr-2" />
              Mark All Present
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between p-3 rounded-lg border hover-elevate"
                  data-testid={`row-student-${student.id}`}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-muted text-sm">
                        {student.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {student.id} • {student.grade}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {student.status === "present" ? (
                      <Badge className="bg-chart-2 hover:bg-chart-2">
                        <Check className="h-3 w-3 mr-1" />
                        Present
                      </Badge>
                    ) : (
                      <Badge variant="destructive">
                        <X className="h-3 w-3 mr-1" />
                        Absent
                      </Badge>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleAttendance(student.id)}
                      data-testid={`button-toggle-${student.id}`}
                    >
                      Toggle
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Select Date</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Today's Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Students</span>
                  <span className="font-bold text-lg" data-testid="text-total-students">{students.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Present</span>
                  <span className="font-bold text-lg text-chart-2" data-testid="text-present-count">{presentCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Absent</span>
                  <span className="font-bold text-lg text-destructive" data-testid="text-absent-count">{absentCount}</span>
                </div>
              </div>
              <div className="pt-2">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Attendance Rate</span>
                  <span className="font-semibold">
                    {((presentCount / students.length) * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-chart-2 transition-all"
                    style={{ width: `${(presentCount / students.length) * 100}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
