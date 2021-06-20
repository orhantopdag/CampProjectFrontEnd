import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
             
                <Image avatar spaced="right" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-x-y-version/1/12/Venusaur.jpg?width=325"></Image>
                <Dropdown pointing="top left" text="orhan">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={props.SignedOut} text="Bilgilerim" icon="sign-out"/>

                    
                </Dropdown.Menu>

                </Dropdown>
            </Menu.Item>
        </div>
    )
}
