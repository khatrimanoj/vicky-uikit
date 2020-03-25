import React from 'react';
import  Colors  from '../src/components/color/Color';
import Grid  from '../src/components/grid/Grid';
import Typography from '../src/components/typography/Typography';
import Button from '../src/components/button/button';
import { storiesOf } from "@storybook/react";


  storiesOf("Styles", module)
  .add("Typography", () => (
    <Typography />
  ))
  .add("Grid", () => (
    <Grid />
  ))
  .add("Colors", () => (
    <Colors />
  ))
  .add("Button", () => (
    <Button />
  ))
  
  
 
 