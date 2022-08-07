import "./style.css";
import React, { Component } from "react";
import SeatList from "./SeatList";
import TicketList from "./TicketList";
import seatData from "./../data/seatList.json";
import { connect } from "react-redux";

export class Home extends Component {
    render() {
        return (
            <div className='main'>
                <div className='row h-100 g-0'>
                    <div className='col-3'>
                        <div className='movie h-100 w-100'></div>
                    </div>
                    <div className='col-6'>
                        <div className='seat-area'>
                            <div className='screen'>
                                <span
                                    style={{
                                        color: "#fff",
                                        marginBottom: "5px",
                                        letterSpacing: "5px",
                                        textTransform: "uppercase",
                                        fontSize: "13px",
                                        fontWeight: "700",
                                    }}>
                                    Screen
                                </span>
                                <div className='monitor' />
                                <div className='light' />
                            </div>

                            <SeatList />

                            <div
                                className='row mt-3 pt-2 px-5 d-flex justify-content-center align-items-center m-auto'
                                style={{ maxWidth: "800px" }}>
                                <div className='col-4 d-flex justify-content-center align-item-center'>
                                    <span className='text-white me-2'>Available</span>
                                    <div className='seat-box w-25 px-2'>
                                        <div className='seat'></div>
                                        <div className='seat seat--' />
                                    </div>
                                </div>

                                <div className='col-4 d-flex justify-content-center align-item-center'>
                                    <span className='text-white me-2'>Selected</span>
                                    <div className='seat-box w-25 px-2'>
                                        <div className='seat selected'></div>
                                        <div className='seat seat-- selected' />
                                    </div>
                                </div>
                                <div className='col-4 d-flex justify-content-center align-item-center'>
                                    <span className='text-white me-2'>Booked</span>
                                    <div className='seat-box w-25 px-2'>
                                        <div className='seat booked'></div>
                                        <div className='seat seat-- booked' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='h-100 bg-white d-flex flex-column justify-content-between'>
                            <div
                                className='text-black'
                                style={{
                                    marginTop: "20px",
                                    height: "5vh",
                                    letterSpacing: "5px",
                                    textTransform: "uppercase",
                                    fontSize: "18px",
                                    fontWeight: "700",
                                }}>
                                Your Ticket
                            </div>
                            <TicketList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    fetchSeats = async () => {
        try {
            const action = {
                type: "UPDATE_SEAT_LIST",
                payload: seatData,
            };

            this.props.dispatch(action);
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.fetchSeats();
    }
}

export default connect()(Home);
