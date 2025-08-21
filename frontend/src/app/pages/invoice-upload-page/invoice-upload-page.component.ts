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
  template: `
    <div class="space-y-8">
      <!-- Page Header -->
      <div>
        <h1>Invoice Upload (OCR)</h1>
        <p class="text-muted-foreground mt-1">
          Upload invoices and extract data automatically using AI
        </p>
      </div>

      <!-- Upload Area -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Upload Zone -->
        <div class="space-y-6">
          <div class="bg-card rounded-lg border border-border p-8 shadow-sm">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <lucide-icon
                  [img]="uploadIcon"
                  class="w-8 h-8 text-primary"
                ></lucide-icon>
              </div>
              <h3 class="mb-2">Upload Invoice</h3>
              <p class="text-sm text-muted-foreground mb-6">
                Drag and drop your invoice files here, or click to browse
              </p>

              <div
                class="border-2 border-dashed border-border rounded-lg p-12 hover:border-primary/50 transition-colors"
              >
                <div class="text-center">
                  <lucide-icon
                    [img]="fileTextIcon"
                    class="w-12 h-12 text-muted-foreground mx-auto mb-4"
                  ></lucide-icon>
                  <p class="text-muted-foreground mb-4">
                    Drop files here or click to upload
                  </p>
                  <button
                    class="bg-primary text-primary-foreground px-4 py-2 rounded-sm hover:opacity-90"
                  >
                    Choose Files
                  </button>
                </div>
              </div>

              <p class="text-xs text-muted-foreground mt-4">
                Supported formats: PDF, JPG, PNG, TIFF (Max 10MB)
              </p>
            </div>
          </div>

          <!-- Camera Capture -->
          <div class="bg-card rounded-lg border border-border p-6 shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <lucide-icon
                [img]="cameraIcon"
                class="w-5 h-5 text-primary"
              ></lucide-icon>
              <h3>Camera Capture</h3>
            </div>
            <p class="text-sm text-muted-foreground mb-4">
              Take a photo of your invoice directly
            </p>
            <button
              class="w-full border border-border rounded-sm py-2 px-4 hover:bg-accent"
            >
              Open Camera
            </button>
          </div>
        </div>

        <!-- Processing Status -->
        <div class="space-y-6">
          <div class="bg-card rounded-lg border border-border p-6 shadow-sm">
            <h3 class="mb-4">Processing Status</h3>

            <div
              *ngIf="processingFiles().length === 0"
              class="text-center py-8"
            >
              <p class="text-muted-foreground">No files being processed</p>
            </div>

            <div *ngIf="processingFiles().length > 0" class="space-y-4">
              <ng-container *ngFor="let file of processingFiles()">
                <div class="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <lucide-icon
                    [img]="fileTextIcon"
                    class="w-5 h-5 text-muted-foreground"
                  ></lucide-icon>
                  <div class="flex-1">
                    <p class="font-medium">{{ file.name }}</p>
                    <p class="text-sm text-muted-foreground">
                      {{ file.status }}
                    </p>

                    <div
                      *ngIf="file.progress < 100"
                      class="w-full bg-border rounded-full h-2 mt-2"
                    >
                      <div
                        class="bg-primary h-2 rounded-full transition-all duration-300"
                        [style.width.%]="file.progress"
                      ></div>
                    </div>
                  </div>
                  <lucide-icon
                    *ngIf="file.status === 'completed'"
                    [img]="checkCircleIcon"
                    class="w-5 h-5 text-secondary"
                  ></lucide-icon>
                </div>
              </ng-container>
            </div>
          </div>

          <!-- OCR Results -->
          <div class="bg-card rounded-lg border border-border p-6 shadow-sm">
            <h3 class="mb-4">Extracted Data</h3>

            <div *ngIf="extractedData() as data; else noData" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="text-sm font-medium text-muted-foreground"
                    >Invoice Number</label
                  >
                  <p class="font-medium">{{ data.invoiceNumber }}</p>
                </div>
                <div>
                  <label class="text-sm font-medium text-muted-foreground"
                    >Amount</label
                  >
                  <p class="font-medium">
                    {{ "$" + (data.amount.toLocaleString() || "") }}
                  </p>
                </div>
                <div>
                  <label class="text-sm font-medium text-muted-foreground"
                    >Date</label
                  >
                  <p class="font-medium">{{ data.date }}</p>
                </div>
                <div>
                  <label class="text-sm font-medium text-muted-foreground"
                    >Due Date</label
                  >
                  <p class="font-medium">{{ data.dueDate }}</p>
                </div>
              </div>

              <div>
                <label class="text-sm font-medium text-muted-foreground"
                  >Vendor</label
                >
                <p class="font-medium">{{ data.vendor }}</p>
              </div>

              <div class="flex gap-2 pt-4">
                <button
                  class="bg-primary text-primary-foreground px-4 py-2 rounded-sm hover:opacity-90"
                >
                  Create Invoice
                </button>
                <button
                  class="border border-border px-4 py-2 rounded-sm hover:bg-accent"
                >
                  Edit Data
                </button>
              </div>
            </div>

            <ng-template #noData>
              <div class="text-center py-8">
                <p class="text-muted-foreground">
                  Upload an invoice to see extracted data
                </p>
              </div>
            </ng-template>
          </div>
        </div>
      </div>
    </div>
  `,
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
