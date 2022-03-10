import React, { useState } from 'react'


function Table(){

    const [interests, setInterest] = useState({})

    return(
        <div className="interests-table">
            <form>
                <table>
                    <tbody>
                        <tr>
                            <th>General</th>
                        <td>I like to code</td>
                        </tr>
                        <tr>
                            <th>Music</th>
                        <td>I like to code</td>
                        </tr>
                        <tr>
                            <th>Movies</th>
                        <td>I like to code</td>
                        </tr>
                        <tr>
                            <th>Idols</th>
                        <td>I like to code</td>
                        </tr>
                        <tr>
                            <th>Hobbies</th>
                        <td>I like to code</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Table;