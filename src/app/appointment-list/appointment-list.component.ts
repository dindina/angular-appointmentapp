import { Component } from '@angular/core';
import {Appointment} from '../models/appointment'
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  ngOnInit(): void {
    let saved = localStorage.getItem("appointments")
    this.appointment = saved ? JSON.parse(saved) : []
  }

  newAppointmentTitle : string = "";
  newAppointmentDate : Date =  new Date();
  appointment: Appointment[] = []



  addAppointment(){
      if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
        let newAppoint : Appointment = {
        id :Date.now(),
        title : this.newAppointmentTitle,
        date : this.newAppointmentDate,
      }
      console.log('hello ' + this.newAppointmentTitle)
      this.appointment.push(newAppoint)

      this.newAppointmentDate = new Date()
      this.newAppointmentTitle=""

      localStorage.setItem("appointments",JSON.stringify(this.appointment))


    }
  }
  deleteAppointment(index : number){
    this.appointment.splice(index,1)
    localStorage.setItem("appointments",JSON.stringify(this.appointment))
}
}


