import React from 'react'
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import App from '../App'
import CardList from '../components/card-list/card-list.component'

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path='/App'>
                <App />
            </ComponentPreview>
          <ComponentPreview path='/CardList'>
            <CardList />
          </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews