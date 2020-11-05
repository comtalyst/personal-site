import React from 'react';

import { Flex, Link, Box } from "@chakra-ui/core";
import { FaGithub } from "react-icons/fa";

import { Title, HeaderBig, TextMedium, HeaderSmall } from '../components/Texts.js';
import { TagBoxes } from '../components/Layouts.js';
import { LinkOut } from '../components/Buttons.js';

import musk_landmarked from './GFC/musk_landmarked.png';
import musk_lips_cropped from './GFC/musk_lips_cropped.png'
import example from './GFC/example.png'
import BlogPage, { TopBar, Block, SubBlock, Image_, Paragraph, BulletPoint, Bold} from '../containers/BlogPage.js';

function GFC() {
  return (
    <BlogPage>
      <Title>Generative Facial Cosmetics</Title>
      <TopBar>
        <Link isExternal href='https://github.com/comtalyst/generative-facial-cosmetics'><Box as={FaGithub} size='30px' mx='10px'/></Link>
      </TopBar>
      <Block>
        <HeaderBig>
          People Involved
        </HeaderBig>
        <Paragraph>
          <span style={{color: '#63B3ED', fontWeight:'bold'}}>Myself</span> as a <span style={{fontWeight:'bold'}}>Developer</span>
        </Paragraph>
      </Block>
      <Block>
        <HeaderBig>
          Technologies
        </HeaderBig>
        <TagBoxes keywords={['Machine Learning', 'Computer Vision', 'Generative Adversarial Networks', 'Tensorflow', 'Keras', 'OpenCV', 'Dlib', 'Python']}/>
      </Block>
      <Block>
        <HeaderBig>
          Abstract
        </HeaderBig>
        <Paragraph>
          The objective is to apply various facial makeup products to the input face automatically and smoothly.
          Instead of placing the predefined layer of makeup on top of the face image, we are going to approach this task
          by regenerating the merged image of face and makeups using <Bold>Nvidia StyleGAN</Bold>. 
        </Paragraph>
        <Flex direction='column' alignItems='center' mt='1rem'>
          <Flex justifyContent='center' wrap='wrap'>
            <Image_ src={example} alt='Sample of how it works' shadow='' maxHeight='200px' height='auto' width='auto'/>
          </Flex>
          <Paragraph fontStyle='italic' color='gray.300'>Like this, but without any photo editing software</Paragraph>
        </Flex>
        <Paragraph>
          The scope of this project will only include the application of lipstick.
          Other features (e.g. eyeliners) might be worked on some time in the future.
          We do not expect the key process to change entirely for other features, but some minor details are likely to change.
        </Paragraph>
      </Block>
      <Block>
        <HeaderBig>
          Input Format
        </HeaderBig>
        <Paragraph>
          Each input is expected to be a high-resolution, close-up image of a human face. The preferred size for our model is 1024x1024.
          Otherwise, the image will be resized.
        </Paragraph>
      </Block>
      <Block>
        <HeaderBig>
          Methodology
        </HeaderBig>
        <SubBlock>
          <HeaderSmall>
            Extracting Face
          </HeaderSmall>
          <Paragraph>
            First of all, we detect the landmarks of the face using <Bold>OpenCV</Bold>, <Bold>Dlib</Bold>, and its pre-trained landmark detection model. 
            The detailed instructions are roughly similar to&nbsp;
            <LinkOut href='https://dev.to/livecodestream/detecting-face-features-with-python-16o6'>this</LinkOut> 
            &nbsp;helpful tutorial. Images without detected faces are considered anomalous and skipped.
          </Paragraph>
          <Flex direction='column' alignItems='center' mt='1rem'>
            <Flex justifyContent='center' wrap='wrap'>
              <Image_ src={musk_landmarked} alt='sample_face_landmarked'/>
            </Flex>
            <Paragraph fontStyle='italic' color='gray.300'>The face of Elon Musk with landmarks</Paragraph>
          </Flex>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Cropping parts
          </HeaderSmall>
          <Paragraph>
            We add some paddings to the polygonal space formed by landmark points of 
            the to-be-modified feature (in this case, lips) since landmark detection might mistakenly cut
            some corner parts of the feature, hurting the regeneration accuracy later on. Then, we crop the part
            as a polygon and place it in transparent image space.
          </Paragraph>
          <Flex direction='column' alignItems='center' mt='1rem'>
            <Flex justifyContent='center' wrap='wrap'>
              <Image_ src={musk_lips_cropped} alt='sample_face_lips_cropped' h='100px'/>
            </Flex>
            <Paragraph fontStyle='italic' color='gray.300'>The cropped lips with padding = 10px from the center</Paragraph>
          </Flex>
          <Paragraph>
            At implementation, we also limit the height and the width of the cropped lips to be 340 + 10*2,
            where 10 is the padding amount.
            Lips bigger than this size will be resized to fit in the 360x360 box.
          </Paragraph>
          <Paragraph>
            The number 360 is derived from the analysis of lips size from our dataset
            and the compatibility with <Bold>Progressive GAN</Bold>, where each layer's size 
            should be multiplied by a prime number (usually 2).
          </Paragraph>
          <Paragraph>
            The reason that we crop parts before putting them in the network is that we expect to reduce the 
            domain size by getting rid of unnecessary/unrelated parts, optimizing the learning process.
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Encoding
          </HeaderSmall>
          <Paragraph>
            We use a trained convolutional network to convert a 4-channel cropped parts into an encoded latent vector.
            With this latent vector, we can regenerate an image from it using the generator in the next step.
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Injection and Regeneration
          </HeaderSmall>
          <Paragraph>
            After we get the latent space of the user's face, we can regenerate it with our trained generator model.
            This will allow us to inject other latent spaces into <Bold>Adaptive Instance Normalization (AdaIN)</Bold> blocks in the model.
          </Paragraph>
          <Paragraph>
            We will have an image of a face with a 
            preferred makeup applied injected to the network. The injecting face should have its area near the target feature
            similar to the one from the original input. However, one must-have difference is that this face should have
            the chosen makeup applied. Therefore, for each makeup, varied sample faces with the makeup applied should
            be provided in order to generate faces based on that makeup.
          </Paragraph>
          <Paragraph>
            The injecting image shall be processed through the same pipeline as the input image: detecting landmarks, 
            cropping and padding, and encoding. Then, we can inject the encoded image to the network, generating
            a new feature image that is similar to the user's input but has a style of the chosen makeup.
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Replacement
          </HeaderSmall>
          <Paragraph>
            At this point, we now have an image of a certain face feature with the makeup applied. We can proceed to put 
            this piece on top of the full input face at the same position prior to cropping. We expect to blur the edges 
            or fade-in alpha layer near the edges in order to smoothen the replacement.
          </Paragraph>
          <Paragraph>
            Finally, we got the entire face provided by the user with the makeup applied.
          </Paragraph>
        </SubBlock>
      </Block>
      <Block>
        <HeaderBig>
          The Generator
        </HeaderBig>
        <Paragraph>
          The <Bold>StyleGAN</Bold> and <Bold>GAN</Bold> have two models in their architecture: the generator and the discriminator.
          For more information on these terms, I recommend taking a look at&nbsp;
          <LinkOut href='https://nanonets.com/blog/stylegan-got/'>this</LinkOut> easy-to-understand tutorial.
        </Paragraph>
        <Paragraph>
          The generator will take a latent vector with a size of 512 as an input and output an image of size 360x360.
          The discriminator will take an image of the same size and output the decision value to validate the input image.
          The full architecture we use will be posted soon.
        </Paragraph>
      </Block>
      <Block>
        <HeaderBig>
          Training the Generator
        </HeaderBig>
        <SubBlock>
          <HeaderSmall>
            Dataset
          </HeaderSmall>
          <Paragraph>
            Our training data are in the same format the expected user input. It goes through the mentioned pipeline up to
            the point where the specified feature was cropped off. We then use those cropped pieces to train the unsupervised <Bold>GAN</Bold>.
            In addition, we augment the training images by randomly zoom-in/out them while making sure that no parts of
            the lips are out of bounds. This will probably help the network deals with blurry input images. We also
            apply small random rotations to the images to fix the issue from the previous model where improperly aligned faces were inputted.
          </Paragraph>
          <Paragraph>
            The dataset we are currently using is the <LinkOut href='https://github.com/NVlabs/ffhq-dataset'>FFHQ Dataset</LinkOut>,
            which is the same dataset used to train StyleGan in the original paper. However, we do expect differences in performances 
            due to different use of data. No additional data preprocessing is needed for this dataset.
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Anomaly Skipping
          </HeaderSmall>
          <Paragraph>
            Some images, both from the dataset and in production, are not in a proper condition and might
            corrupt the model in the training process or force the model to produce unacceptable outputs.
            Those images will be skipped entirely. Here is the condition where the image will be skipped:
          </Paragraph>
          <Paragraph tab={false}>
            <BulletPoint>No faces detected</BulletPoint>
            <BulletPoint>Too small face, which actually causes from having a smaller face in the background 
            and the face detection model cannot detect the main face. From the dataset, we can identify this easily by 
            plotting the size distribution, where they clearly separate from the valid ones.</BulletPoint>
          </Paragraph>
          <Paragraph>
            Other conditions like too small lips or too big lips compared to face size is also considered, but they
            always occur with the above conditions, where they are also eliminated.
            These anomalies make up a very small amount in the dataset and can be skipped without having much negative effect.
            We expect the distribution of the inputs in practice to be roughly similar.
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Progressive Learning
          </HeaderSmall>
          <Paragraph>
            Since the models will be trained progressively to improve learning performance, the generator output and 
            discriminator input will start from small images at the initial stage of training. As the training progresses, 
            their size will be gradually increased until it reaches the final size of 360x360. In our case, the starting size 
            is 5x5, then progresses to 15x15, 45x45, 90x90, 180x180, and ends with 360x360.
          </Paragraph>
          <Paragraph>
            In <Bold>progressive GAN</Bold>, we also smoothen the transition between sizes by gradually fade-in the new layers until
            they completely replace the old ones. The tutorial and more details can be found&nbsp;
            <LinkOut href='https://machinelearningmastery.com/how-to-train-a-progressive-growing-gan-in-keras-for-synthesizing-faces/'>here</LinkOut>.
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Training Process
          </HeaderSmall>
          <Paragraph>
            We mainly use <Bold>Google Colaboratory</Bold> with 8-cores TPU to train our model. The batch size we use for this device is 128.
          </Paragraph>
          <Paragraph>
            Each generation of the model is trained using Adam optimizer. The loss function used is minimax loss. 
            Learning rates are varied by situation at the training time, but they are usually be in [1e-4, 1e-3].
            The number of epochs per generation increases as the model progresses. The fade-in algorithm
            converges after roughly half of the total epochs before normal training resumes for the rest of each generation. 
          </Paragraph>
          <Paragraph>
            Due to limited availability of training hardwares, we decided to train the generator only up to the resolution of 90x90, which will be used on tryout.
            The higher resolution generator might be worked on some time in the future.
            According to current results, we do not expect the training process to change.
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Historical Experiments
          </HeaderSmall>
          <Paragraph>
            We trained a model where the latent size is smaller (256) and the data is augmented only using random zooming.
            However, both the randomly generated and regenerated-from-encoded-latent images were not that accurate.
            Therefore, we decided to increase the latent space size and add more augmentation to see if the model can improve.
          </Paragraph>
          <Paragraph>
            We also trained a more complex version of the model with 512 latent size. The main difference in this version is that
            there are more dense layers at the end and there are filters on each layer. However, the generator loss failed to converge, 
            causing it to repeatedly generate blank images most of the time. After months-long optimization, research, and tuning, we reduced
            the complexity of the model to the current version where the training process is going healthy.
          </Paragraph>
        </SubBlock>
      </Block>
      <Block>
        <HeaderBig>
          The Encoder
        </HeaderBig>
        <Paragraph>
          We trained a VGG-16-like regression model that converts a 4-channel image into an encoded latent vector. 
          The full architecture will be posted soon.
        </Paragraph>
      </Block>
      <Block>
        <HeaderBig>
          Training the Encoder
        </HeaderBig>
        <SubBlock>
          <HeaderSmall>
            Dataset
          </HeaderSmall>
          <Paragraph>
            The training dataset is basically an infinite dataset of (latent vector, generated image) pairs.
            We create this by randomizing latent vectors and use the trained generator to generate their images.
            In training, we also make sure that the randomization has been done in every epoch to make
            the dataset truly infinite. We believe this will help the model more generalizable.
            However, we expect to bring in the real (not generated) cropped parts in the future too.
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Loss Calculation
          </HeaderSmall>
          <Paragraph>
            We define two weighted loss terms: <Bold>latent loss</Bold> and <Bold>generated loss</Bold>.
            The latent loss is the mean squared error between the latent vector predicted by the encoder and the actual latent space 
            provided by the dataset. The generated loss is the mean squared error between the images.
            In other words, we use the generator to generate a new image from the predicted latent vector.
            Then, we measure MSE between that image and the pre-encoding image provided by the dataset.
            The weighting factors of both loss terms are hyperparameters. We are currently using 0.5 and 5 for
            latent and generated loss respectively.
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Training Process
          </HeaderSmall>
          <Paragraph>
            We mainly use <Bold>Google Colaboratory</Bold> with 8-cores TPU to train our model. The batch size we use for this device is 128.
            However, we sometimes use the standard CPU instead if the colab TPU usage limit is reached. The batch size is 32. 
            We do not expect a significant difference in accuracy from this.
          </Paragraph>
          <Paragraph>
            The model is trained using Adam optimizer with the learning rate of 1e-4 for most of the time.
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Results
          </HeaderSmall>
          <Paragraph>
            We are currently training and optimizing the model.
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Historical Experiments
          </HeaderSmall>
          <Paragraph>
            We have tried several approaches to encode the images.
            At first, we try to fine-tune a pre-trained VGG-16 (ImageNet) with a similar finite dataset but reduced to
            3 channels by blacking out the transparent part. With the latent loss only, the model does not learn at all. 
            We then train a newly built model for 4-channel images with the finite dataset and latent loss. This time, 
            the model is learning, but validation loss diverges away since the first epoch. After using the infinite dataset,
            and let it runs for a night, the model still cannot generalize and the loss does not decrease.
            Fortunately, after integrating the generated loss, the model starts to learn properly. However,
            it is observable that the latent loss part still does not learn much, while the generated loss learns
            quickly and converges at some point. The result images regenerated from the encoder look similar 
            to the original in terms of shapes for the most testing data. However, coloring is usually paler than 
            the original. We hope building a better generator and integrating a real dataset rather than the randomly generated 
            dataset on training would cure this problem.
          </Paragraph>
        </SubBlock>
      </Block>
      <Block>
        <HeaderBig>
          Other implementation details
        </HeaderBig>
        <SubBlock>
          <HeaderSmall>
            Generator Training Dataset Preprocessing
          </HeaderSmall>
          <Paragraph>
            Raw images of faces go through the pipeline using <Bold>OpenCV</Bold> and <Bold>Dlib</Bold> as we mentioned. 
            We also use <Bold>Pillow</Bold> to assist the image processing. The cropped pieces were collected and saved as 
            <Bold> TFRecord (.tfrec)</Bold>  files. One TFRecord contains 128 images, 
            which is the expected batch size. Each TFRecord also stores image IDs, 
            which helps identify the images. Each TFRecord is also kept in parallel with a JSON file of the same name, 
            storing landmark coordinates of the images stored by the TFRecord.
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Data Storage
          </HeaderSmall>
          <Paragraph>
            The TFRecord files are stored in a storage bucket of <Bold>Google Cloud Platform</Bold>. 
          </Paragraph>
        </SubBlock>
        <SubBlock>
          <HeaderSmall>
            Model Building and Training
          </HeaderSmall>
          <Paragraph>
            We mainly use <Bold>Tensorflow</Bold> and <Bold>Keras Functional API</Bold> to build and train the model.
            We also define the training step manually and optimize the training using <Bold>@tf.function</Bold>.
          </Paragraph>
        </SubBlock>
      </Block>
      <Block>
        <HeaderBig>
          Summary
        </HeaderBig>
        <Paragraph>
          At this time, our model is being trained and optimized. It shows a promising result in generating lips from the generator.
        </Paragraph>
      </Block>
      <Block>
        <HeaderBig>
          Reflections
        </HeaderBig>
        <Paragraph>
          This is the first "practical" machine learning project I did since I start to be confident of my skills in the
          foundational aspects of deep learning after completing Andrew Ng's specialization on Coursera.
          At this point, I realize that the world of machine learning is much bigger than what I saw while
          I was in the course, both on theoretical and implementation aspects. Here is the rough summary of what I have learned: 
        </Paragraph>
        <Paragraph tab={false}>
          <BulletPoint>I have learned more on preprocessing and analyzing a big dataset 
          and building an efficient data pipeline</BulletPoint>
          <BulletPoint>I have a chance to discover new kinds of neural networks that are recently
          invented such as <Bold>GAN</Bold> and its variants, as well as other techniques used in building those architectures</BulletPoint>
          <BulletPoint>I have learned more about the mechanics of Tensorflow and Keras, as well as becoming more fluent in 
          utilizing them on machine learning projects</BulletPoint>
          <BulletPoint>I have learned to integrate Tensorflow and distributed external accelerators like TPU and GPU</BulletPoint>    
          <BulletPoint>I now have hands-on experience in optimizing and babysitting machine learning models</BulletPoint>
        </Paragraph>
        <Paragraph>
          Also, I have experienced unexpected mistakes throughout the work:
        </Paragraph>
        <Paragraph tab={false}>
          <BulletPoint>Neglecting Fade-in transition in progressive learning devolve the learning progress</BulletPoint>
          <BulletPoint>I spent a long time finding the best method to qualify and normalize the lips from faces,
          only to realize that I could just use data augmentation to generalize all of them except obvious anomalies
          (or maybe this is my another mistake?)</BulletPoint>
          <BulletPoint>The images should be resized to 2^n * 2^n to ease the progressive learning processs</BulletPoint>
        </Paragraph>
        <Paragraph>
          It is possible that there are uncovered mistakes still looming under my work. However, I hope 
          to be able to discover them as soon as possible. Finding them can be both disappointing and refreshing
          at the same time. Not only it can improve the product, but it is also a really great way to learn and memorize, I believe.
        </Paragraph>
      </Block>
      <Block>
        <HeaderBig>
          Further Development
        </HeaderBig>
        <Paragraph>
          These ideas are suggested and might be developed in the future:
        </Paragraph>
        <Paragraph>
          <BulletPoint>Using face segmentation instead of landmark polygonal cropping to smoothen the edges</BulletPoint>
          <BulletPoint>Using other architectures where encoding is not needed to prevent feature loss</BulletPoint>
          <BulletPoint>Increasing the output image size to the commercially practical resolution</BulletPoint>
          <BulletPoint>Applying the technique to other facial cosmetics</BulletPoint>
        </Paragraph>
      </Block>
    </BlogPage>
  );
}

export default GFC;
