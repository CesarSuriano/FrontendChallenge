import { Component, OnInit } from '@angular/core'
import { Team } from 'src/app/models/Team'

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  private _nameTeam!: String
  private _descriptionPage!: String
  private _descriptionPageClass!: String
  private _buttonStartClass!: String
  private _buttonRestartClass!: String
  private _teams!: Array<Team>

  constructor() { }

  public get nameTeam(): String {
    return this._nameTeam
  }

  public set nameTeam(value: String) {
    this._nameTeam = value
  }

  public get descriptionPage(): String {
    return this._descriptionPage
  }

  public set descriptionPage(value: String) {
    this._descriptionPage = value
  }

  public get descriptionPageClass(): String {
    return this._descriptionPageClass
  }

  public set descriptionPageClass(value: String) {
    this._descriptionPageClass = value
  }

  public get buttonStartClass(): String {
    return this._buttonStartClass
  }

  public set buttonStartClass(value: String) {
    this._buttonStartClass = value
  }

  public get buttonRestartClass(): String {
    return this._buttonRestartClass
  }

  public set buttonRestartClass(value: String) {
    this._buttonRestartClass = value
  }

  public get teams(): Array<Team> {
    return this._teams
  }

  public set teams(value: Array<Team>) {
    this._teams = value
  }

  ngOnInit(): void {
    this.descriptionPage = "Qual o nome das equipes?"
    this.descriptionPageClass = ""
    this.buttonStartClass = ""
    this.buttonRestartClass = "hidden"
    this.teams = [
      new Team("firstTeamClass", "/assets/images/equipe1.png", ""),
      new Team("secondTeamClass", "/assets/images/equipe2.png", ""),
      new Team("thirdTeamClass", "/assets/images/equipe3.png", ""),
      new Team("fourthTeamClass", "/assets/images/equipe4.png", ""),
    ]
  }

  startDuels(): void {
    this.buttonStartClass = "hidden"
    this.descriptionPage = "Iniciando as batalhas..."
    this.descriptionPageClass = "text-blink"
    this.defineTheWinners()
  }

  private defineTheWinners(): void {
    setTimeout(() => {
      this.descriptionPage = "Definindo os vencedores..."
      this.startFinal()
    }, 5000)
  }

  private startFinal() {
    setTimeout(() => {
      this.teams[0].class = "fade-out"
      this.teams[3].class = "fade-out"
      this.descriptionPage = "Começando a final..."
      this.defineTheChampion()
    }, 5000)
  }

  private defineTheChampion() {
    setTimeout(() => {
      this.descriptionPage = "Campeão definido"
      this.descriptionPageClass = ""
      this.teams[1].class = "fade-out"
      this.buttonRestartClass = ""
    }, 5000)
  }

  restartDuels(): void {
    this.ngOnInit()
  }
}
