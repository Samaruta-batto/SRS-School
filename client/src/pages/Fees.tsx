import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, Plus, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

//todo: remove mock functionality
const mockStudents = [
  { id: "ADM001", name: "Rahul Sharma", isHostelResident: true },
  { id: "ADM002", name: "Priya Patel", isHostelResident: false },
  { id: "ADM003", name: "Amit Kumar", isHostelResident: true },
];

export default function Fees() {
  const [selectedStudent, setSelectedStudent] = useState<string>("");
  const [tuitionFee, setTuitionFee] = useState("15000");
  const [hostelFee, setHostelFee] = useState("8000");
  const [fineFee, setFineFee] = useState("0");
  const [annualFunctionFee, setAnnualFunctionFee] = useState("2000");
  const [campFee, setCampFee] = useState("0");
  const [customFees, setCustomFees] = useState<{ name: string; amount: string }[]>([]);
  const [isPaid, setIsPaid] = useState(false);

  const student = mockStudents.find((s) => s.id === selectedStudent);

  const calculateTotal = () => {
    let total = parseFloat(tuitionFee || "0");
    if (student?.isHostelResident) total += parseFloat(hostelFee || "0");
    total += parseFloat(fineFee || "0");
    total += parseFloat(annualFunctionFee || "0");
    total += parseFloat(campFee || "0");
    customFees.forEach((fee) => {
      total += parseFloat(fee.amount || "0");
    });
    return total;
  };

  const addCustomFee = () => {
    setCustomFees([...customFees, { name: "", amount: "" }]);
  };

  const removeCustomFee = (index: number) => {
    setCustomFees(customFees.filter((_, i) => i !== index));
  };

  const updateCustomFee = (index: number, field: "name" | "amount", value: string) => {
    const updated = [...customFees];
    updated[index][field] = value;
    setCustomFees(updated);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Fee Management</h1>
        <p className="text-muted-foreground mt-1">
          Manage student fees and payment records
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Generate Fee Invoice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="student">Select Student</Label>
              <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                <SelectTrigger id="student" data-testid="select-student">
                  <SelectValue placeholder="Choose a student" />
                </SelectTrigger>
                <SelectContent>
                  {mockStudents.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.name} ({s.id})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedStudent && (
              <>
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-semibold">Fee Breakdown</h3>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="tuition">Tuition Fee (₹)</Label>
                      <Input
                        id="tuition"
                        type="number"
                        value={tuitionFee}
                        onChange={(e) => setTuitionFee(e.target.value)}
                        data-testid="input-tuition-fee"
                      />
                    </div>

                    {student?.isHostelResident && (
                      <div className="space-y-2">
                        <Label htmlFor="hostel">Hostel Fee (₹)</Label>
                        <Input
                          id="hostel"
                          type="number"
                          value={hostelFee}
                          onChange={(e) => setHostelFee(e.target.value)}
                          data-testid="input-hostel-fee"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="fine">Fine/Penalty (₹)</Label>
                      <Input
                        id="fine"
                        type="number"
                        value={fineFee}
                        onChange={(e) => setFineFee(e.target.value)}
                        data-testid="input-fine-fee"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="annual">Annual Function Fee (₹)</Label>
                      <Input
                        id="annual"
                        type="number"
                        value={annualFunctionFee}
                        onChange={(e) => setAnnualFunctionFee(e.target.value)}
                        data-testid="input-annual-fee"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="camp">Camp Fee (₹)</Label>
                      <Input
                        id="camp"
                        type="number"
                        value={campFee}
                        onChange={(e) => setCampFee(e.target.value)}
                        data-testid="input-camp-fee"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Other Event Fees</Label>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={addCustomFee}
                        data-testid="button-add-custom-fee"
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        Add Custom Fee
                      </Button>
                    </div>
                    {customFees.map((fee, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          placeholder="Event name"
                          value={fee.name}
                          onChange={(e) => updateCustomFee(index, "name", e.target.value)}
                          data-testid={`input-custom-fee-name-${index}`}
                        />
                        <Input
                          type="number"
                          placeholder="Amount"
                          value={fee.amount}
                          onChange={(e) => updateCustomFee(index, "amount", e.target.value)}
                          data-testid={`input-custom-fee-amount-${index}`}
                        />
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => removeCustomFee(index)}
                          data-testid={`button-remove-custom-fee-${index}`}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <Label htmlFor="paid">Mark as Paid</Label>
                  <Switch
                    id="paid"
                    checked={isPaid}
                    onCheckedChange={setIsPaid}
                    data-testid="switch-paid"
                  />
                </div>

                <Button
                  className="w-full"
                  onClick={() => console.log("Save fee record")}
                  data-testid="button-save-fee"
                >
                  Save Fee Record
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Invoice Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedStudent ? (
                <>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Student:</span>
                      <span className="font-medium">{student?.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">ID:</span>
                      <span className="font-mono text-xs">{selectedStudent}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold" data-testid="text-total-amount">₹{calculateTotal().toLocaleString()}</span>
                      <Badge variant={isPaid ? "default" : "destructive"}>
                        {isPaid ? "Paid" : "Pending"}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Total Amount</p>
                  </div>
                </>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Select a student to view summary
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Financial Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Collected</span>
                <span className="font-bold text-chart-2" data-testid="text-total-collected">₹12.5L</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Pending</span>
                <span className="font-bold text-chart-3" data-testid="text-total-pending">₹2.4L</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Collection Rate</span>
                <span className="font-bold">84%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
