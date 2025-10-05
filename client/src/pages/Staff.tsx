import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Plus, Edit, Trash2, Search } from "lucide-react";

//todo: remove mock functionality
const mockStaff = [
  { id: "STF001", name: "Dr. Ramesh Kumar", role: "Teacher", contact: "+91 98765 43210", salary: 45000 },
  { id: "STF002", name: "Mr. Suresh Patel", role: "Driver", contact: "+91 98765 43211", salary: 25000 },
  { id: "STF003", name: "Mrs. Lakshmi Reddy", role: "Teacher", contact: "+91 98765 43212", salary: 42000 },
  { id: "STF004", name: "Mr. Arjun Singh", role: "Non-Teaching", contact: "+91 98765 43213", salary: 20000 },
  { id: "STF005", name: "Ms. Priya Sharma", role: "Teacher", contact: "+91 98765 43214", salary: 38000 },
  { id: "STF006", name: "Mr. Raj Kumar", role: "Driver", contact: "+91 98765 43215", salary: 22000 },
];

export default function Staff() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStaff = mockStaff.filter((staff) => {
    const matchesRole = roleFilter === "all" || staff.role === roleFilter;
    const matchesSearch =
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "Teacher":
        return "default";
      case "Driver":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Staff</h1>
          <p className="text-muted-foreground mt-1">
            Manage teaching and non-teaching staff
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-staff">
              <Plus className="h-4 w-4 mr-2" />
              Add Staff
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Staff Member</DialogTitle>
              <DialogDescription>
                Enter staff details to add them to the system
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="staffName">Full Name</Label>
                <Input
                  id="staffName"
                  placeholder="Enter staff name"
                  data-testid="input-staff-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="staffId">Staff ID</Label>
                <Input
                  id="staffId"
                  placeholder="STF001"
                  data-testid="input-staff-id"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger data-testid="select-role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Teacher">Teacher</SelectItem>
                    <SelectItem value="Driver">Driver</SelectItem>
                    <SelectItem value="Non-Teaching">Non-Teaching</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="staffContact">Contact</Label>
                <Input
                  id="staffContact"
                  placeholder="+91 98765 43210"
                  data-testid="input-staff-contact"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Salary (₹)</Label>
                <Input
                  id="salary"
                  type="number"
                  placeholder="45000"
                  data-testid="input-salary"
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
                  console.log("Add staff triggered");
                  setIsAddDialogOpen(false);
                }}
                data-testid="button-save-staff"
              >
                Add Staff
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
            data-testid="input-search-staff"
          />
        </div>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-[180px]" data-testid="select-role-filter">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="Teacher">Teacher</SelectItem>
            <SelectItem value="Driver">Driver</SelectItem>
            <SelectItem value="Non-Teaching">Non-Teaching</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredStaff.map((staff) => (
          <Card key={staff.id} className="hover-elevate" data-testid={`card-staff-${staff.id}`}>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {staff.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-base">{staff.name}</CardTitle>
                <p className="text-sm font-mono text-muted-foreground">{staff.id}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Role:</span>
                <Badge variant={getRoleBadgeVariant(staff.role) as any}>
                  {staff.role}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Contact:</span>
                <span className="font-mono text-xs">{staff.contact}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Salary:</span>
                <span className="font-semibold">₹{staff.salary.toLocaleString()}</span>
              </div>
              <div className="flex gap-2 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => console.log("Edit staff:", staff.id)}
                  data-testid={`button-edit-${staff.id}`}
                >
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => console.log("Delete staff:", staff.id)}
                  data-testid={`button-delete-${staff.id}`}
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
