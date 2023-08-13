import React from 'react'
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import App from '../App'
import CardList from '../components/card-list/card-list.component'
import Card from '../components/card/card.component'

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path='/App'>
                <App />
            </ComponentPreview>
          <ComponentPreview path='/CardList'>
            <CardList />
          </ComponentPreview>
          <ComponentPreview path='/Card'>
            <Card />
          </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews