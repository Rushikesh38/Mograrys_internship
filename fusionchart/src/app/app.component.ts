import { Component } from "@angular/core";

const data = {
  chart: {
    caption: "Process Involved During Course Design",
    yaxismaxvalue: "1100",
    yaxisminvalue: "0",
    theme: "candy",
    valuefontsize: "12",
    viewmode: "1",
    valuefontcolor: "#FFFFFF",
    plotfillhovercolor: "#1A237E",
    divlinealpha: "0"
  },
  dataset: [
    {
      data: [
        {
          id: "01",
          x: "15",
          y: "1000",
          label: "Item Request",
          shape: "rectangle",
          color: "#5D62B5",
          width: "100",
          height: "60",
          hovercolor: "#1A237E"
        },
        {
          id: "02",
          x: "30",
          y: "1000",
          label: "Item Request Approval",
          color: "#29C3BE",
          shape: "rectangle",
          width: "100",
          height: "60"
        },
        {
          id: "03",
          x: "45",
          y: "1000",
          label:
            "Indent Create return for Data Request",
          color: "#F2726F",
          shape: "rectangle",
          width: "100",
          height: "60"
        },
        {
          id: "04",
          x: "45",
          y: "800",
          label: "Indent Approval",
          color: "#FFC533",
          shape: "rectangle",
          width: "100",
          height: "60"
        },
        {
          id: "05",
          x: "15",
          y: "800",
          label: "Create Purchase Order",
          color: "#62B58F",
          shape: "rectangle",
          width: "100",
          height: "60"
        },
        {
          id: "06",
          x: "30",
          y: "700",
          label: "Bill Entry.",
          color: "#BC95DF",
          shape: "rectangle",
          width: "100",
          height: "60"
        },
        {
          id: "07",
          x: "15",
          y: "500",
          label: "Purchase Order Approval",
          color: "#F2726F",
          shape: "rectangle",
          width: "100",
          height: "60"
        },
        {
          id: "08",
          x: "30",
          y: "500",
          label: "GRN",
          color: "#FFC533",
          shape: "rectangle",
          width: "100",
          height: "60"
        },
        {
          id: "09",
          x: "45",
          y: "500",
          label: "GRN Approval",
          color: "#C7D631",
          shape: "rectangle",
          width: "100",
          height: "60"
        },
        {
          id: "10",
          x: "15",
          y: "200",
          label: "Request for Quotation",
          color: "#FFC533",
          shape: "rectangle",
          width: "100",
          height: "60"
        
        },
        {
          id: "11",
          x: "30",
          y: "200",
          label: "Receive Quotation",
          color: "#C7D631",
          shape: "rectangle",
          width: "100",
          height: "60"
        },
        {
          id: "12",
          x: "45",
          y: "200",
          label: "Quotation Comparison",
          color: "#BC95DF",
          shape: "rectangle",
          width: "100",
          height: "60"
        },
        // {
        //   id: "13",
        //   x: "75",
        //   y: "600",
        //   label: "Complete syllabus{br}templete",
        //   color: "#C7D631",
        //   shape: "rectangle",
        //   width: "100",
        //   height: "60"
        // },
        // {
        //   id: "14",
        //   x: "75",
        //   y: "350",
        //   label: "Review course{br}(Faculty)",
        //   color: "#FFC533",
        //   shape: "polygon",
        //   radius: "60"
        // },
        // {
        //   id: "15",
        //   x: "75",
        //   label: "Course{br}complete",
        //   y: "100",
        //   shape: "rectangle",
        //   color: "#5D62B5",
        //   width: "100",
        //   height: "60"
        // }
      ]
    }
  ],
  connectors: [
    {
      connector: [
        {
          from: "01",
          to: "02",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50"
        },
        {
          from: "02",
          to: "03",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50"
        },
        {
          from: "03",
          to: "04",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50"
        },
        {
          from: "04",
          to: "05",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50"
        },
        {
          from: "04",
          to: "06",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50"
        },
        {
          from: "05",
          to: "07",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50"
        },
        {
          from: "07",
          to: "08",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50"
        },
        {
          from: "08",
          to: "09",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50"
        },
        {
          from: "11",
          to: "10",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50"
        },
        {
          from: "10",
          to: "11",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50"
        },
        {
          from: "10",
          to: "12",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50"
        },
        {
          from: "12",
          to: "05",
          strength: "2",
          arrowatstart: "0",
          arrowatend: "1",
          alpha: "50"
        },
        // {
        //   from: "13",
        //   to: "14",
        //   strength: "2",
        //   arrowatstart: "0",
        //   arrowatend: "1",
        //   alpha: "50"
        // },
        // {
        //   from: "14",
        //   to: "15",
        //   strength: "2",
        //   arrowatstart: "0",
        //   arrowatend: "1",
        //   alpha: "50"
        // }
      ]
    }
  ]
};

@Component({
  selector: "app-root",
  // template: "./app.component.html" /* see HTML tab */
  // template:"./app.component.html"
  template:'<fusioncharts [width]="width"  [height]="height" [type]="type" [dataFormat]="dataFormat" [dataSource]="dataSource"></fusioncharts>'
})
export class AppComponent {
  width = "1200";
  height = "700";
  type = "dragnode";
  dataFormat = "json";
  dataSource = data;
}
