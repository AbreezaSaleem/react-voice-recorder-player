const returnCanvasIfTheyExist = (
  selectors : Array<string>, parentElement : HTMLElement
) : HTMLCanvasElement[] | null => {
  if (!selectors.length) return null;
  const result: HTMLCanvasElement[] = [];
  selectors.forEach((selector: string) => {
    const element = parentElement?.getElementsByClassName(selector) as HTMLCollectionOf<HTMLCanvasElement>;
    if (element?.length) result.push(element[0]);
    return element;
  });
  return result.length ? result : null;
};

const removeCanvasElementsFromDOM = (canvasElements : HTMLCanvasElement[] | null) : void => {
  if (!canvasElements) return;
  canvasElements.forEach((canvasElement: HTMLCanvasElement) => {
    canvasElement.remove();
  });  
};

const createCanvasElements = (selectors : Array<string>) : HTMLCanvasElement[] => {
  const canvasElements = selectors.map((selector: string) => {
    const canvasElement = document.createElement('canvas') as HTMLCanvasElement;
    canvasElement.className = selector;
    return canvasElement;
  });
  return canvasElements;
};

const setUpEnlargedCanvasDimensions = (canvasElement: HTMLCanvasElement[], parentElement : HTMLElement) => {
  /* setup canvas dimensions but scale it by devicePixelRatio */
  canvasElement.forEach((canvasElement: HTMLCanvasElement) => {
    const ctx = canvasElement.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasElement.width  = (parentElement?.clientWidth ?? 1) * devicePixelRatio;
    canvasElement.height = (parentElement?.clientHeight ?? 1) * devicePixelRatio;

    /* scale the context elements by the scale factor as well */
    ctx?.scale(devicePixelRatio, devicePixelRatio);
  });
};

const scaleCanvasToOriginalSize = (canvasElement: HTMLCanvasElement[], parentElement : HTMLElement) => {
  canvasElement.forEach((canvasElement: HTMLCanvasElement) => {
    /* now scale the canvas back down to its original size */
    canvasElement.style.width = parentElement?.clientWidth + 'px';
    canvasElement.style.height = parentElement?.clientHeight + 'px';
  });
};

const appendCanvasElementsToDOM = (canvasElements: HTMLCanvasElement[], parentElement : HTMLElement) => {
  canvasElements.forEach((canvasElement: HTMLCanvasElement) => {
    parentElement?.appendChild(canvasElement);
  });
};

/* why am i creating the canvas element via javascript instead of hmtl?
because i need to set its dimensions through the 'height', 'width' attribute
dynamically AS IT GETS CREATED because otherwise for some reason, the canvas
dictates the dimensions of both itself and the parent element.
this is also the reason why we 'appendChild' AFTER we're done setting the dimensions */
export const setUpCanvas =
  (rootElementId: string, selectors : Array<string>, parentElementSelector : string) : HTMLCanvasElement[] | null => 
{
  try {
    const rootElement = document.getElementById(rootElementId) as HTMLElement;
    const parentElement = rootElement.querySelector(parentElementSelector) as HTMLElement;
    const canvasElements = returnCanvasIfTheyExist(selectors, parentElement);

    removeCanvasElementsFromDOM(canvasElements);
    
    const newCanvasElements = createCanvasElements(selectors);
    
    setUpEnlargedCanvasDimensions(newCanvasElements, parentElement);
    
    scaleCanvasToOriginalSize(newCanvasElements, parentElement);
    
    appendCanvasElementsToDOM(newCanvasElements, parentElement);
    
    return newCanvasElements;
  } catch (error) {
    console.error('Error in setUpCanvas: ', error);
    return null;
  }
};
