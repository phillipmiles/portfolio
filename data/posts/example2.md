# This is a test title

This is an example file where I would be writing and editing the content of a blog post completly ignoring **how** it will be rendered in the final app. This is just about content only.

Praesent eget augue in tellus porta luctus. Mauris quis nulla nulla. Vivamus rutrum rutrum nisi, sed laoreet augue dignissim egestas.

## Oh look, a heading 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a diam vitae metus rhoncus ornare. Donec imperdiet libero vel lectus molestie maximus. Integer iaculis lobortis cursus. Nullam sodales odio magna, a mollis est aliquet et. Proin posuere metus non interdum sagittis. Nulla ac risus ullamcorper, pellentesque odio vehicula, laoreet libero. Sed neque libero, venenatis et euismod ac, mollis nec mauris.

Phasellus interdum, velit eu tincidunt lobortis, lorem est dictum arcu, at bibendum velit turpis at purus. In fermentum, dolor sed rutrum accumsan, lorem risus maximus purus, id tempus ipsum ex at nibh. 

![alt text](https://images.unsplash.com/photo-1616707439961-8ac6befbb678?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80 "Logo Title Text 1")

Mauris a odio eleifend, vehicula sapien in, varius massa. Aliquam finibus elit lorem, id consequat felis sollicitudin in. Phasellus tortor ligula, pulvinar in risus sit amet, laoreet ultrices magna. Nam bibendum fringilla efficitur. Pellentesque eros nibh, ornare id semper sed, aliquam vel neque.

Proin faucibus rutrum vehicula. Integer vel iaculis mauris. Nam ante elit, fermentum et varius in, eleifend at est. Duis enim sem, semper non turpis vitae, finibus ultricies odio. Integer ex augue, sagittis vel porttitor non, hendrerit nec tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Donec fringilla molestie sapien, porta viverra urna condimentum aliquam.

```marksy
  h(Image, { 
    alt: '', 
    caption: 'Photo: Getty Images',
    src: 'https://images.unsplash.com/photo-1616691521964-0700807c20eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'})
```

Aenean id leo sit amet justo efficitur congue. Integer ut vulputate turpis. Proin quis erat eu ligula faucibus consectetur. Cras nec pretium dolor. Fusce porttitor magna ex, eget sagittis urna tempus sit amet. Pellentesque dapibus nec sem vitae ultricies. Curabitur quis ante sagittis, hendrerit felis nec, vehicula risus.

```marksy
  h(Image, { 
    alt: '', 
    blockType: 'wide',
    float: 'right',
    caption: 'Photo: Getty Images',
    src: 'https://images.unsplash.com/photo-1616683385067-43a22a7bb126?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3100&q=80'})
```

Cras convallis, ex non rutrum imperdiet, purus nisi posuere dui, ut tempor neque dui at justo. Suspendisse potenti. Aenean vestibulum dignissim ultrices. Cras rhoncus, ligula et tincidunt bibendum, sapien velit vulputate mauris, porttitor faucibus felis sem eget purus. Phasellus at nunc eget lacus aliquam sodales non et urna. Ut sed rhoncus magna. 

### Oh look, a heading 2

Mauris a odio eleifend, vehicula sapien in, varius massa. Aliquam finibus elit lorem, id consequat felis sollicitudin in. Phasellus tortor ligula, pulvinar in risus sit amet, laoreet ultrices magna. Nam bibendum fringilla efficitur. Pellentesque eros nibh, ornare id semper sed, aliquam vel neque.

Proin faucibus rutrum vehicula. Integer vel iaculis mauris. Nam ante elit, fermentum et varius in, eleifend at est. Duis enim sem, semper non turpis vitae, finibus ultricies odio. Integer ex augue, sagittis vel porttitor non, hendrerit nec tortor. 

```marksy
  h(Image, { 
    blockType: 'wide', 
    alt: '', 
    caption: 'Photo: Getty Images',
    src: 'https://images.unsplash.com/photo-1616696068617-2f85a2a19226?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'})
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a diam vitae metus rhoncus ornare. Donec imperdiet libero vel lectus molestie maximus. Integer iaculis lobortis cursus. Nullam sodales odio magna, a mollis est aliquet et. Proin posuere metus non interdum sagittis. Nulla ac risus ullamcorper, pellentesque odio vehicula, laoreet libero. Sed neque libero, venenatis et euismod ac, mollis nec mauris.

Phasellus interdum, velit eu tincidunt lobortis, lorem est dictum arcu, at bibendum velit turpis at purus. In fermentum, dolor sed rutrum accumsan, lorem risus maximus purus, id tempus ipsum ex at nibh. 

```jsx
const hello = () => {
  return 'hello world';
}

console.log(hello());

const testingAReallyLongVariableName = 'Here is a really long string to go with it';

const Test = () => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    var sum = 1 + 12;
    console.log("Test");
  }, [value]);

  return (
    <div>
      <OtherComponent propery={true} />
      <Image
        src={imageSrc}
        alt={title}
        sx={{
          width: ['100%', '328px'],
          height: '192px',
          objectPosition: '50% 50%',
          objectFit: 'cover',
        }}
      />
    </div>
  )

  export const setAuthUser = (user) => {
    // Set user id for analytics
    if (user && user.uid) {
      setUserId(user.uid);
    }
  }

  const apple = () => {
    transform('colorValue');
    return orange;
  }
}
// Prints 'hello world'
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a diam vitae metus rhoncus ornare. Donec imperdiet libero vel lectus molestie maximus. Integer iaculis lobortis cursus. Nullam sodales odio magna, a mollis est aliquet et. Proin posuere metus non interdum sagittis. Nulla ac risus ullamcorper, pellentesque odio vehicula, laoreet libero. Sed neque libero, venenatis et euismod ac, mollis nec mauris.

Phasellus interdum, velit eu tincidunt lobortis, lorem est dictum arcu, at bibendum velit turpis at purus. In fermentum, dolor sed rutrum accumsan, lorem risus maximus purus, id tempus ipsum ex at nibh. 

```marksy
  h(Image, { 
    alt: '', 
    caption: 'Photo: Getty Images',
    src: 'https://cdn.vox-cdn.com/thumbor/cV8X8BZ-aGs8pv3D-sCMr5fQZyI=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19933026/image.png'})
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a diam vitae metus rhoncus ornare. Donec imperdiet libero vel lectus molestie maximus. Integer iaculis lobortis cursus. Nullam sodales odio magna, a mollis est aliquet et. Proin posuere metus non interdum sagittis. Nulla ac risus ullamcorper, pellentesque odio vehicula, laoreet libero. Sed neque libero, venenatis et euismod ac, mollis nec mauris.

Phasellus interdum, velit eu tincidunt lobortis, lorem est dictum arcu, at bibendum velit turpis at purus. In fermentum, dolor sed rutrum accumsan, lorem risus maximus purus, id tempus ipsum ex at nibh. 