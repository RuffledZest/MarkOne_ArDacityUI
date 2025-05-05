/* eslint-disable no-unused-vars */
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { componentConfig } from '../../lib/componentConfig';
import PropsTable from '../../components/docs/PropsTable';
import ComponentPreview from '../../components/docs/ComponentPreview';
import CodeBlock from '../../components/docs/CodeBlock';

// Dynamic component imports
import TextPressure from '../../components/ArDacityUi/TextPressure/TextPressure';
import ScrollReveal from '../../components/ArDacityUi/ScrollReveal/ScrollReveal';
import PixelTransition from '../../components/ArDacityUi/PixelTransition/PixelTransition';
import SplashCursor from '../../components/ArDacityUi/SplashCursor/SplashCursor';
import Hyperspeed from '../../components/ArDacityUi/Hyperspeed/Hyperspeed';
import Aurora from '../../components/ArDacityUi/Aurora/Aurora';
import { MessageSignerForm } from '../../components/ArDacityUi/MessageSigner';
import { HeroOne } from '../../components/ArDacityUi/HeroOne';

const components = {
  'text-pressure': TextPressure,
  'scroll-reveal': ScrollReveal,
  'pixel-transition': PixelTransition,
  'splash-cursor': SplashCursor,
  'hyperspeed': Hyperspeed,
  'aurora': Aurora,
  'message-signer': MessageSignerForm,
  'hero-one': HeroOne
};

// Example templates for each component
const examples = {
  'text-pressure': {
    basic: {
      code: `import TextPressure from "@ar-dacity/ardacity-text-pressure";

export default function TextPressureExample() {
  return (
    <TextPressure
      text="ArDacity"
      width={true}
      weight={true}
      italic={true}
      alpha={false}
      flex={true}
      stroke={false}
      minFontSize={36}
    />
  );
}`,
      component: <TextPressure text="ArDacity" width={true} weight={true} italic={true} alpha={false} flex={true} stroke={false} minFontSize={36} />
    }
  },
  'aurora': {
    basic: {
      code: `import Aurora from "@ar-dacity/ardacity-aurora";

export default function AuroraExample() {
  return (
    <div style={{ width: '100%', height: '200px' }}>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </div>
  );
}`,
      component: (
        <div style={{ width: '100%', height: '200px' }}>
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
      )
    }
  },
  'scroll-reveal': {
    basic: {
      code: `import ScrollReveal from "@ar-dacity/ardacity-scroll-reveal";

export default function ScrollRevealExample() {
  return (
    <ScrollReveal
      baseOpacity={0}
      enableBlur={true}
      baseRotation={5}
      blurStrength={10}
      className="text-center"
    >
      <p className="text-2xl font-bold">ArDacity UI ScrollReveal</p>
      <p>This content will be revealed with animation on scroll.</p>
    </ScrollReveal>
  );
}`,
      component: (
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          className="text-center"
        >
          <p className="text-2xl font-bold">ArDacity UI ScrollReveal</p>
          <p>This content will be revealed with animation on scroll.</p>
        </ScrollReveal>
      )
    }
  },
  'pixel-transition': {
    basic: {
      code: `import PixelTransition from "@ar-dacity/ardacity-pixel-transition";

export default function PixelTransitionExample() {
  return (
    <PixelTransition
      firstContent={
        <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", backgroundColor: "#2a2a2a" }}>
          <p style={{ fontSize: "2rem", color: "#ffffff" }}>First Content</p>
        </div>
      }
      secondContent={
        <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", backgroundColor: "#111" }}>
          <p style={{ fontSize: "2rem", color: "#ffffff" }}>Second Content</p>
        </div>
      }
      gridSize={12}
      pixelColor="#614df2"
      animationStepDuration={0.4}
    />
  );
}`,
      component: (
        <PixelTransition
          firstContent={
            <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", backgroundColor: "#2a2a2a" }}>
              <p style={{ fontSize: "2rem", color: "#ffffff" }}>First Content</p>
            </div>
          }
          secondContent={
            <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", backgroundColor: "#111" }}>
              <p style={{ fontSize: "2rem", color: "#ffffff" }}>Second Content</p>
            </div>
          }
          gridSize={12}
          pixelColor="#614df2"
          animationStepDuration={0.4}
        />
      )
    }
  },
  'splash-cursor': {
    basic: {
      code: `import SplashCursor from "@ar-dacity/ardacity-splash-cursor";

export default function SplashCursorExample() {
  return (
    <SplashCursor
      color="#3498db"
      size={30}
      splashRadius={100}
      splashDuration={0.8}
      enabled={true}
    />
  );
}`,
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-xl text-center">Hover or click in this area to see the splash effect</p>
          <SplashCursor
            color="#3498db"
            size={30}
            splashRadius={100}
            splashDuration={0.8}
            enabled={true}
          />
        </div>
      )
    }
  },
  'hyperspeed': {
    basic: {
      code: `import Hyperspeed from "@ar-dacity/ardacity-hyperspeed";

export default function HyperspeedExample() {
  return (
    <div style={{ width: '100%', height: '200px' }}>
      <Hyperspeed
        starColor="#FFFFFF"
        starCount={1000}
        speed={2}
        backgroundColor="#000000"
      />
    </div>
  );
}`,
      component: (
        <div style={{ width: '100%', height: '200px' }}>
          <Hyperspeed
            starColor="#FFFFFF"
            starCount={1000}
            speed={2}
            backgroundColor="#000000"
          />
        </div>
      )
    }
  },
  'message-signer': {
    basic: {
      code: `import { MessageSignerForm } from "@ar-dacity/ardacity-message-signer";

export default function MessageSignerExample() {
  const handleSign = (result) => {
    console.log('Message:', result.message);
    console.log('Signature:', result.signature);
    console.log('Lua Code:', result.luaCode);
  };

  return (
    <MessageSignerForm 
      title="Message Signer"
      description="Sign messages using Lua handlers"
      onSign={handleSign}
      className="my-8"
      style={{ maxWidth: '800px' }}
    />
  );
}`,
      component: (
        <MessageSignerForm 
          title="Message Signer"
          description="Sign messages using Lua handlers"
          onSign={(result) => console.log(result)}
          className="my-8"
          style={{ maxWidth: '800px' }}
        />
      )
    }
  },
  'hero-one': {
    basic: {
      code: `import { HeroOne } from "@ar-dacity/ardacity-hero-one";

export default function HeroOneExample() {
  return (
    <div className="w-full h-[600px] overflow-hidden">
      <HeroOne />
    </div>
  );
}`,
      component: (
        <div className="w-full h-[600px] overflow-hidden border border-gray-700 rounded-lg">
          <HeroOne />
        </div>
      )
    }
  }
};

export default function ComponentPage() {
  const { componentId } = useParams();
  const navigate = useNavigate();
  
  const componentData = componentConfig.find(c => c.id === componentId);
  const example = examples[componentId]?.basic;

  useEffect(() => {
    if (!componentData) {
      navigate('/docs');
    }
  }, [componentData, navigate]);

  if (!componentData || !example) {
    return null;
  }

  // Generate installation code
  const installCode = `npm install ${componentData.packageName}`;

  return (
    <div className="pb-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{componentData.name}</h1>
        <p className="text-gray-400">{componentData.description}</p>
      </div>

      {/* Installation */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Installation</h2>
        <CodeBlock code={installCode} language="bash" />
      </div>

      {/* Import */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Import</h2>
        <CodeBlock code={componentData.importStatement} language="jsx" />
      </div>

      {/* Usage */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Usage</h2>
        <ComponentPreview
          component={componentData.name}
          code={example.code}
        >
          {example.component}
        </ComponentPreview>
      </div>

      {/* API Reference */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">API Reference</h2>
        <PropsTable props={componentData.props} />
      </div>
    </div>
  );
} 