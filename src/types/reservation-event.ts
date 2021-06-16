import { IReservation } from "./reservation";

export interface IReservationEvent {
  action: string;
  reservation: IReservation;
  timestamp: string;
}
