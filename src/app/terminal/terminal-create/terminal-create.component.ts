import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InstallationStatus } from 'src/app/shared/models/installation-status.model';
import { TerminalAddFormInfo } from 'src/app/shared/models/terminal-add-form-info.model';
import { Terminal } from 'src/app/shared/models/terminal.model';
import { TerminalService } from 'src/app/shared/services/terminal.service';
declare const $: any
declare const swal: any

@Component({
  selector: 'app-terminal-create',
  templateUrl: './terminal-create.component.html',
  styleUrls: ['./terminal-create.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TerminalCreateComponent implements OnInit {

  terminal: Terminal = new Terminal
  installationStatusList: InstallationStatus[] = []
  formInfo: TerminalAddFormInfo = new  TerminalAddFormInfo

  constructor(private terminalService: TerminalService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getFormInfo();

  }

  bootstrapMultiStepForm() {

    var form = $(".validation-wizard");

    $(".validation-wizard").steps({
        headerTag: "h6"
        , bodyTag: "section"
        , transitionEffect: "fade"
        , titleTemplate: '<span class="step">#index#</span> #title#'
        , labels: {
            finish: "Submit"
        }
        , onStepChanging: function (event: any, currentIndex: number, newIndex: string | number) {
            return currentIndex > newIndex || !(3 === newIndex && Number($("#age-2").val()) < 18) && (currentIndex < newIndex && (form.find(".body:eq(" + newIndex + ") label.error").remove(), form.find(".body:eq(" + newIndex + ") .error").removeClass("error")), form.validate().settings.ignore = ":disabled,:hidden", form.valid())
        }
        // , onFinishing: function (event: any, currentIndex: any) {
        //     return form.validate().settings.ignore = ":disabled", form.valid()
        // }
        // , onFinished: function (event: any, currentIndex: any) {
        //     swal("Form Submitted!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");
        // }
    }),
    $(".validation-wizard").validate({
        ignore: "input[type=hidden]"
        , errorClass: "text-danger"
        , successClass: "text-success"
        , highlight: function (element: any, errorClass: any) {
            $(element).removeClass(errorClass)
        }
        , unhighlight: function (element: any, errorClass: any) {
            $(element).removeClass(errorClass)
        }
        , errorPlacement: function (error: any, element: any) {
            error.insertAfter(element)
        }
        , rules: {
            email: {
                email: !0
            }
        }
    })
  }

  getFormInfo() {
    this.terminalService.getAddFormInfo().subscribe(result => {
      this.formInfo = result;
      this.formInfo.deviceModels = [...result.deviceModels]
      this.formInfo.deviceTypes = [...result.deviceTypes]
      this.installationStatusList = [...result.installationStatus]
      this.formInfo.vaultTypes = [...result.vaultTypes]
      //this.cdr.detectChanges();
      console.log(result.installationStatus);
      this.bootstrapMultiStepForm();
    })
  }

  trackInstallationStatus(index: any, installationStatus: InstallationStatus) { return `${index}-${installationStatus.id}`; }

}
