# ReceivablesFlow Screen Templates & User Flows

## Application Architecture

### Main Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│                    Application Shell                    │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│   Sidebar    │            Main Content Area             │
│              │                                          │
│  - Logo      │  ┌─────────────────────────────────────┐ │
│  - Navigation│  │          Page Header                │ │
│  - Core      │  ├─────────────────────────────────────┤ │
│  - AI Layer  │  │                                     │ │
│  - Reports   │  │         Page Content                │ │
│  - Settings  │  │                                     │ │
│              │  └─────────────────────────────────────┘ │
│              │                                          │
└──────────────┴──────────────────────────────────────────┘
```

---

## Page Templates

### 1. Login Page
```
                ┌─────────────────────┐
                │                     │
                │   ReceivablesFlow   │
                │                     │
                │  ┌───────────────┐  │
                │  │   Username    │  │
                │  ├───────────────┤  │
                │  │   Password    │  │
                │  ├───────────────┤  │
                │  │     Login     │  │
                │  └───────────────┘  │
                │                     │
                └─────────────────────┘
```
**Specifications**:
- **Layout**: Centered card on full-screen background
- **Card**: 400px max-width, centered vertically and horizontally
- **Form**: Single column, 24px gap between fields
- **Background**: Subtle gradient or pattern

### 2. Dashboard
```
┌─────────────────────────────────────────────────────────┐
│ Dashboard                           [Filter] [Export]   │
│ Key metrics and performance overview                    │
├─────────────────────────────────────────────────────────┤
│ ┌─────────┬─────────┬─────────┬─────────┐               │
│ │  Total  │Receivab │Payables │ Cash    │ KPI Row       │
│ │Outstanding les    │         │ Flow    │               │
│ └─────────┴─────────┴─────────┴─────────┘               │
│                                                         │
│ ┌─────────────────────────────┬─────────────────────┐   │
│ │                             │                     │   │
│ │      Cash Flow Chart        │    Upcoming Due     │   │
│ │                             │     Payments        │   │
│ │                             │                     │   │
│ └─────────────────────────────┴─────────────────────┘   │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │              Recent Invoices Table                  │ │
│ │ Invoice # │ Client    │ Amount  │ Due Date │ Status │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### 3. Invoices List Page
```
┌─────────────────────────────────────────────────────────┐
│ Invoices                     [Filter] [Search] [+ New]  │
│ Manage all your invoices and payments                   │
├─────────────────────────────────────────────────────────┤
│ ┌─────────┬─────────┬─────────┬─────────┐               │
│ │  Total  │  Paid   │Overdue  │ Draft   │ Status Cards  │
│ │Invoices │Invoices │Invoices │Invoices │               │
│ └─────────┴─────────┴─────────┴─────────┘               │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │                Invoice Table                        │ │
│ │ ☐ │ #     │ Client    │ Amount │ Date │ Due │ Status │ │
│ │ ☐ │ INV-1 │ Acme Corp │ $12.5K │ 8/15 │ 8/30│ Paid  │ │
│ │ ☐ │ INV-2 │ Tech Sol  │ $24.5K │ 7/20 │ 8/20│Overdue│ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### 4. Invoice Detail/Create Page
```
┌─────────────────────────────────────────────────────────┐
│ Invoice Details                   [Save] [Send] [...]   │
│ Create or edit invoice information                      │
├─────────────────────────────────────────────────────────┤
│ ┌─────────────────────────┬─────────────────────────┐   │
│ │    Invoice Details      │     Customer Info       │   │
│ │                         │                         │   │
│ │ Invoice #: [_________]  │ Customer: [___________] │   │
│ │ Date:      [_________]  │ Email:    [___________] │   │
│ │ Due Date:  [_________]  │ Address:  [___________] │   │
│ │                         │           [___________] │   │
│ └─────────────────────────┴─────────────────────────┘   │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │                 Line Items                          │ │
│ │ Description      │ Qty │ Rate  │ Amount │ [Actions] │ │
│ │ [_____________] │ [_] │ [___] │ [____] │    [×]    │ │
│ │ [+ Add Item]                                        │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Subtotal:                                   $10,000 │ │
│ │ Tax:                                         $1,000 │ │
│ │ Total:                                      $11,000 │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### 5. Payments Page
```
┌─────────────────────────────────────────────────────────┐
│ Payments                         [Filter] [+ Record]    │
│ Track incoming and outgoing payments                    │
├─────────────────────────────────────────────────────────┤
│ ┌─────────┬─────────┬─────────┬─────────┐               │
│ │ Total   │ This    │ Pending │ Failed  │ Payment Stats │
│ │Received │ Month   │Payments │Payments │               │
│ └─────────┴─────────┴─────────┴─────────┘               │
│                                                         │
│ Tabs: [Recent] [Pending] [Failed]                      │
│ ┌─────────────────────────────────────────────────────┐ │
│ │              Payment History Table                  │ │
│ │ Date │ Invoice │ Customer │ Amount │ Method │ Status │ │
│ │ 8/19 │ INV-001 │ Acme     │ $12.5K │ Bank   │ Paid  │ │
│ │ 8/18 │ INV-002 │ Tech     │ $24.5K │ Card   │Pending│ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### 6. Analytics Page
```
┌─────────────────────────────────────────────────────────┐
│ Analytics                        [Period] [Export]      │
│ Revenue trends and business insights                    │
├─────────────────────────────────────────────────────────┤
│ ┌─────────┬─────────┬─────────┬─────────┐               │
│ │ Revenue │Collection│Average  │Customer │ Key Metrics   │
│ │ Growth  │ Rate     │ Invoice │ Count   │               │
│ └─────────┴─────────┴─────────┴─────────┘               │
│                                                         │
│ ┌─────────────────────────────┬─────────────────────┐   │
│ │                             │                     │   │
│ │     Revenue Trend Chart     │    Top Customers    │   │
│ │                             │     Pie Chart       │   │
│ │                             │                     │   │
│ └─────────────────────────────┴─────────────────────┘   │
│                                                         │
│ ┌─────────────────────────────┬─────────────────────┐   │
│ │                             │                     │   │
│ │   Collection Performance    │  Overdue Analysis   │   │
│ │        Bar Chart            │     Breakdown       │   │
│ │                             │                     │   │
│ └─────────────────────────────┴─────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## AI-Powered Pages

### 7. Risk Analysis Page
```
┌─────────────────────────────────────────────────────────┐
│ Risk Analysis                    [Refresh] [Generate]   │
│ AI-powered risk assessment and client analysis          │
├─────────────────────────────────────────────────────────┤
│ ┌─────────┬─────────┬─────────┬─────────┐               │
│ │Overall  │Payment  │ Credit  │Collection│ Risk Scores   │
│ │Risk: 72 │Risk: 68 │Risk: 45 │Risk: 82 │               │
│ └─────────┴─────────┴─────────┴─────────┘               │
│                                                         │
│ ┌───────────────────────────────────┬─────────────────┐ │
│ │        Client Risk Table          │  Risk Triggers  │ │
│ │ Client     │Score│Outstanding│Days│                 │ │
│ │ Tech Ltd   │ 85  │  $24.5K   │ 45 │ • Payment >30d  │ │
│ │ Acme Corp  │ 42  │  $12.5K   │ 18 │ • Credit limit  │ │
│ └───────────────────────────────────┴─────────────────┘ │
│                                                         │
│ Tabs: [Risk Factors] [Predictions] [Recommendations]   │
└─────────────────────────────────────────────────────────┘
```

### 8. Cash Flow Forecast Page
```
┌─────────────────────────────────────────────────────────┐
│ Cash Flow Forecast           [Timeframe] [Configure]    │
│ AI-powered cash flow predictions and scenario planning  │
├─────────────────────────────────────────────────────────┤
│ ┌─────────┬─────────┬─────────┬─────────┐               │
│ │Projected│Monthly  │ Risk    │ Cash    │ Forecast KPIs │
│ │Net Flow │ Growth  │ Factor  │ Runway  │               │
│ └─────────┴─────────┴─────────┴─────────┘               │
│                                                         │
│ ┌─────────────────────────────┬─────────────────────┐   │
│ │                             │                     │   │
│ │   Cash Flow Forecast Chart  │ Scenario Analysis   │   │
│ │   (Inflow/Outflow/Net)     │ • Optimistic        │   │
│ │                             │ • Most Likely       │   │
│ │                             │ • Pessimistic       │   │
│ └─────────────────────────────┴─────────────────────┘   │
│                                                         │
│ Tabs: [Breakdown] [Risk Factors] [Assumptions]         │
└─────────────────────────────────────────────────────────┘
```

### 9. AI Assistant (Chatbot) Page
```
┌─────────────────────────────────────────────────────────┐
│ AI Assistant                              🤖 Online     │
│ Your intelligent finance companion                      │
├─────────────────────────────────────────────────────────┤
│ ┌───────────────┬─────────────────────────────────────┐ │
│ │ Quick Actions │               Chat Area             │ │
│ │               │                                     │ │
│ │ 💰 Outstanding│ 🤖 Hello! I'm your AI Finance      │ │
│ │ 📈 Cash Flow  │    Assistant. How can I help?      │ │
│ │ 📅 Due Today  │                                     │ │
│ │ 👥 Top Clients│     Show me overdue invoices  👤   │ │
│ │               │                                     │ │
│ │ Recent:       │ 🤖 You have 3 overdue invoices     │ │
│ │ • Cash Healthy│    totaling $32,150...              │ │
│ │ • 3 Overdue   │    [Send Reminders] [View Details]  │ │
│ │ • Revenue ↑8% │                                     │ │
│ └───────────────┴─────────────────────────────────────┤ │
│                 │ [Type your message...] [Send]      │ │
│                 └─────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

## Settings & Configuration Pages

### 10. Auto Messages Page
```
┌─────────────────────────────────────────────────────────┐
│ Auto Messages                    [Reports] [+ Template] │
│ Automated payment reminders and customer communications │
├─────────────────────────────────────────────────────────┤
│ ┌─────────┬─────────┬─────────┬─────────┐               │
│ │ Active  │Messages │Response │Pending  │ Message Stats │
│ │Template │ Sent    │ Rate    │ Sends   │               │
│ └─────────┴─────────┴─────────┴─────────┘               │
│                                                         │
│ Tabs: [Templates] [Automation Rules] [Send History]    │
│ ┌───────────────────────────────────┬─────────────────┐ │
│ │         Template List             │ Template Editor │ │
│ │ 📧 Gentle Reminder    [Edit][×]   │                 │ │
│ │ 📧 Follow-up Reminder [Edit][×]   │ Name: [_______] │ │
│ │ 📧 Final Notice       [Edit][×]   │ Type: [Email ▼] │ │
│ │ 📱 SMS Reminder       [Edit][×]   │ Trigger: [____] │ │
│ │                                   │                 │ │
│ │                                   │ Subject: [____] │ │
│ │                                   │ Message: [____] │ │
│ │                                   │ [Save] [Preview]│ │
│ └───────────────────────────────────┴─────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### 11. Reminder Settings Page
```
┌─────────────────────────────────────────────────────────┐
│ Reminder Settings                [Test Config] [+ Rule] │
│ Configure automated payment reminders and notifications │
├─────────────────────────────────────────────────────────┤
│ ┌─────────┬─────────┬─────────┬─────────┐               │
│ │ Active  │ Sent    │Response │ Failed  │ Config Stats  │
│ │ Rules   │This Mth │ Rate    │Delivery │               │
│ └─────────┴─────────┴─────────┴─────────┘               │
│                                                         │
│ Tabs: [Reminder Rules] [Email Settings] [Channels]     │
│ ┌─────────────────────────────────────────────────────┐ │
│ │                 Rules Configuration                 │ │
│ │ Rule Name     │ Trigger  │ Channel │ Status │Actions│ │
│ │ Gentle        │ 7 days   │ Email   │ Active │[Edit] │ │
│ │ Follow-up     │ 14 days  │ Email+SMS│ Active │[Edit] │ │
│ │ Final Notice  │ 30 days  │ Email   │ Active │[Edit] │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ Rule Editor Panel (when rule selected)                 │
└─────────────────────────────────────────────────────────┘
```

### 12. Receivables Report Page
```
┌─────────────────────────────────────────────────────────┐
│ Receivables Report              [Period] [Filter] [Export]│
│ Comprehensive analysis of outstanding receivables       │
├─────────────────────────────────────────────────────────┤
│ ┌─────────┬─────────┬─────────┬─────────┐               │
│ │ Total   │ Overdue │Collection│ Avg     │ Report KPIs   │
│ │Outstand │ Amount  │ Rate     │ Days    │               │
│ └─────────┴─────────┴─────────┴─────────┘               │
│                                                         │
│ Tabs: [Aging Analysis] [Collection Trends] [Top Debtors]│
│ ┌─────────────────────────────┬─────────────────────┐   │
│ │                             │                     │   │
│ │    Aging Bar Chart          │   Aging Summary     │   │
│ │                             │                     │   │
│ │ Current │ 31-60 │ 61-90 │90+│ • Current: 68%      │   │
│ │         │       │       │   │ • 31-60d: 17%       │   │
│ │         │       │       │   │ • 61-90d: 10%       │   │
│ │         │       │       │   │ • 90+ days: 5%      │   │
│ └─────────────────────────────┴─────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## User Flows

### Primary User Journey: Invoice to Payment
1. **Invoice Creation** → Invoices Page → Create New Invoice
2. **Send Invoice** → Email/SMS notification to customer
3. **Track Status** → Dashboard shows pending payment
4. **Payment Received** → Payments page records transaction
5. **Analysis** → Analytics shows in revenue metrics

### AI-Assisted Workflow: Risk Management
1. **Risk Detection** → AI identifies high-risk clients
2. **Alert Generation** → Risk Analysis page shows warnings
3. **Automated Response** → Auto Messages sends reminders
4. **Follow-up Tracking** → Reminder Settings monitors responses
5. **Outcome Analysis** → Reports show collection success

### Configuration Flow: Setting Up Automation
1. **Template Creation** → Auto Messages page
2. **Rule Configuration** → Reminder Settings page
3. **Channel Setup** → Configure email/SMS/other channels
4. **Testing** → Send test messages
5. **Activation** → Enable automated reminders

---

## Responsive Breakdowns

### Mobile Layout (< 768px)
- **Sidebar**: Hidden, hamburger menu
- **KPI Cards**: Single column stack
- **Charts**: Reduced height, horizontal scroll for tables
- **Forms**: Single column, full width inputs

### Tablet Layout (768px - 1024px)
- **Sidebar**: Collapsible overlay
- **KPI Cards**: 2-column grid
- **Charts**: Side-by-side charts become stacked
- **Tables**: Horizontal scroll with fixed headers

### Desktop Layout (> 1024px)
- **Sidebar**: Always visible, full navigation
- **KPI Cards**: 4-column grid
- **Charts**: Full side-by-side layout
- **Tables**: Full width with all columns visible