import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Shield, User, Mail, Calendar } from "lucide-react";

//todo: remove mock functionality
const adminInfo = {
  userId: "admin_8f3e9a4b2c1d",
  role: "Administrator",
  name: "Admin User",
  email: "admin@eduflex.school",
  joinedDate: "2024-01-15",
};

export default function Profile() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground mt-1">
          View your account information and role
        </p>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {adminInfo.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{adminInfo.name}</CardTitle>
                <Badge className="mt-1">
                  <Shield className="h-3 w-3 mr-1" />
                  {adminInfo.role}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <User className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">User ID</p>
                  <p className="font-mono text-sm font-medium" data-testid="text-user-id">
                    {adminInfo.userId}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">{adminInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Joined</p>
                  <p className="text-sm font-medium">
                    {new Date(adminInfo.joinedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">Permissions</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Manage Students",
                  "Manage Fees",
                  "Track Attendance",
                  "Manage Events",
                  "Manage Staff",
                  "Manage Transport",
                ].map((permission) => (
                  <Badge key={permission} variant="outline">
                    {permission}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
