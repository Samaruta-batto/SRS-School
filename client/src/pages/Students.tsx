import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";

//todo: remove mock functionality
const mockStudents = [
  { id: "ADM001", name: "Rahul Sharma", grade: "10th", contact: "+91 98765 43210", isHostelResident: true, lastExamScore: "85%" },
  { id: "ADM002", name: "Priya Patel", grade: "9th", contact: "+91 98765 43211", isHostelResident: false, lastExamScore: "92%" },
  { id: "ADM003", name: "Amit Kumar", grade: "11th", contact: "+91 98765 43212", isHostelResident: true, lastExamScore: "78%" },
  { id: "ADM004", name: "Sneha Reddy", grade: "12th", contact: "+91 98765 43213", isHostelResident: false, lastExamScore: "95%" },
  { id: "ADM005", name: "Vikram Singh", grade: "8th", contact: "+91 98765 43214", isHostelResident: true, lastExamScore: "88%" },
  { id: "ADM006", name: "Anjali Verma", grade: "10th", contact: "+91 98765 43215", isHostelResident: false, lastExamScore: "91%" },
];

export default function Students() {
  const [gradeFilter, setGradeFilter] = useState<string>("all");
  const [hostelFilter, setHostelFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredStudents = mockStudents.filter((student) => {
    const matchesGrade = gradeFilter === "all" || student.grade === gradeFilter;
    const matchesHostel =
      hostelFilter === "all" ||
      (hostelFilter === "yes" && student.isHostelResident) ||
      (hostelFilter === "no" && !student.isHostelResident);
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGrade && matchesHostel && matchesSearch;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground mt-1">
            Manage student records and information
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-student">
              <Plus className="h-4 w-4 mr-2" />
              Add Student
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>
                Enter student details to add them to the system
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter student name" data-testid="input-student-name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admissionId">Admission ID</Label>
                <Input id="admissionId" placeholder="ADM001" data-testid="input-admission-id" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="grade">Grade</Label>
                <Select>
                  <SelectTrigger data-testid="select-grade">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {["8th", "9th", "10th", "11th", "12th"].map((grade) => (
                      <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact</Label>
                <Input id="contact" placeholder="+91 98765 43210" data-testid="input-contact" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="hostel">Hostel Resident</Label>
                <Switch id="hostel" data-testid="switch-hostel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastExamScore">Last Exam Score</Label>
                <Input id="lastExamScore" placeholder="85%" data-testid="input-exam-score" />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} data-testid="button-cancel">
                Cancel
              </Button>
              <Button onClick={() => {
                console.log("Add student triggered");
                setIsAddDialogOpen(false);
              }} data-testid="button-save-student">
                Add Student
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or ID..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            data-testid="input-search-students"
          />
        </div>
        <Select value={gradeFilter} onValueChange={setGradeFilter}>
          <SelectTrigger className="w-[150px]" data-testid="select-grade-filter">
            <SelectValue placeholder="Grade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Grades</SelectItem>
            {["8th", "9th", "10th", "11th", "12th"].map((grade) => (
              <SelectItem key={grade} value={grade}>{grade}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={hostelFilter} onValueChange={setHostelFilter}>
          <SelectTrigger className="w-[150px]" data-testid="select-hostel-filter">
            <SelectValue placeholder="Hostel" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Students</SelectItem>
            <SelectItem value="yes">Hostel Only</SelectItem>
            <SelectItem value="no">Non-Hostel</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="hover-elevate" data-testid={`card-student-${student.id}`}>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {student.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-base">{student.name}</CardTitle>
                <p className="text-sm font-mono text-muted-foreground">{student.id}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Grade:</span>
                <Badge variant="secondary">{student.grade}</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Contact:</span>
                <span className="font-mono text-xs">{student.contact}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Hostel:</span>
                {student.isHostelResident ? (
                  <Badge>Resident</Badge>
                ) : (
                  <Badge variant="outline">Day Scholar</Badge>
                )}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Last Score:</span>
                <span className="font-semibold">{student.lastExamScore}</span>
              </div>
              <div className="flex gap-2 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => console.log("Edit student:", student.id)}
                  data-testid={`button-edit-${student.id}`}
                >
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => console.log("Delete student:", student.id)}
                  data-testid={`button-delete-${student.id}`}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
