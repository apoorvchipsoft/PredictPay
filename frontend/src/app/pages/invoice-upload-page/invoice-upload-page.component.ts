import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  LucideAngularModule,
  Upload,
  FileText,
  Camera,
  CheckCircle,
} from "lucide-angular";

@Component({
  selector: "app-invoice-upload-page",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./invoice-upload-page.component.html",
})
export class InvoiceUploadPageComponent {
  uploadIcon = Upload;
  fileTextIcon = FileText;
  cameraIcon = Camera;
  checkCircleIcon = CheckCircle;

  processingFiles = signal([
    { id: "1", name: "invoice-001.pdf", status: "processing", progress: 75 },
    { id: "2", name: "receipt-002.jpg", status: "completed", progress: 100 },
  ]);

  extractedData = signal({
    invoiceNumber: "INV-2025-001",
    amount: 12500,
    date: "2025-08-15",
    dueDate: "2025-09-15",
    vendor: "Acme Corporation",
  });
}
