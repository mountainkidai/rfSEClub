## 6. Neurons: Biology’s Signal Units (1891 Golgi & Cajal)

### Overview of Brain

- This guide zooms in from the largest scale (the brain) to the smallest functional unit (the neuron), then connects biology to the mathematics and technology of artificial intelligence.

## The Brain: The Command Center

- The brain is the main organ in your head that controls thoughts, senses, actions, and emotions.

  - **Example:** When you decide to speak, your brain plans the words, sends the signal to your mouth, and you start talking.

- It is made up of billions of cells, mainly **neurons** (for signaling) and **glia** (for support/protection).

  - **Example:** When you learn something new, your neurons form new connections, and glia cells keep those connections healthy.

## The brain's parts include

Steve is hiking around Mountainkid Valley. Suddenly, he sees a friendly robot walking across the road. Here's how Steve's brain works in **functional execution order** to handle this moment:

# Brain Parts and Functions: Aligned to First Principles Execution Order

The brain processes information hierarchically in a flow from raw sensory input to motor output, with regulatory feedback loops modulating activity.

| Brain Part                         | Location                                          | Main Functions & Steve's Example                                                                                                                     | Neural Network (NN) Analogy                          | Language Model (LM) Tip                                      |
| ---------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| Brainstem                          | Base of brain connecting to spinal cord           | Base signal propagation. Controls heartbeat, breathing, and supports all neural signaling. Steve’s heartbeat and breathing stabilize the hike.       | Underlying system operations                         | Gradient updates, loss monitoring                            |
| Thalamus                           | Deep brain relay hub                              | Filters and routes raw sensory inputs to the cortex. Steve’s brain filters visual and auditory data.                                                 | Input preprocessing layer                            | Token filtering/attention preprocessing for noise reduction  |
| Cerebral Cortex                    | Outer layer of the cerebrum                       | Initial feature extraction from sensory data. Steve recognizes shapes and movement patterns of the robot.                                            | Embedding/convolutional layers                       | Word embeddings                                              |
| Limbic System                      | Deep brain structures (amygdala, hippocampus)     | Emotional tagging and memory context. Steve feels curiosity and recalls past encounters.                                                             | Memory modules                                       | Context window in transformers                               |
| Cerebrum (Prefrontal Cortex)       | Largest brain part, frontal lobe (decision areas) | Reasoning, decision making, and planning. Steve decides whether to approach or wave at the robot.                                                    | Deep layers with attention mechanisms                | Self-attention for next-token prediction                     |
| Premotor Cortex                    | Just in front of primary motor cortex             | Action planning and movement preparation. Steve prepares to raise hand to wave.                                                                      | Policy network layers                                | Beam search for token candidates                             |
| Basal Ganglia                      | Deep inside cerebrum                              | Selects and regulates appropriate movements, suppressing unwanted ones. Steve walks smoothly on rocky terrain.                                       | Action selection/filtering mechanism                 | Beam pruning or filtering in decoding                        |
| Primary Motor Cortex               | Located in frontal lobe                           | Executes final motor commands sending signals to muscles. Steve moves arm to wave and walks forward.                                                 | Output layer                                         | Softmax probabilities for output tokens                      |
| Cerebellum                         | Back and bottom of brain                          | Fine-tunes movements via error correction and timing adjustment. Steve balances on uneven ground and waves smoothly.                                 | Residual connections and correction layers           | Post-processing for coherence and correctness                |
| Hypothalamus                       | Below thalamus, near brainstem                    | Regulates autonomic functions, stress, hormones, and body temperature to maintain system stability.                                                  | Optimization and system regulation                   | Gradient clipping, learning rate scheduling                  |
| Reticular Formation                | Throughout brainstem and midbrain                 | Modulates arousal and attention, enabling selective focus. Steve stays alert to the robot.                                                           | Gating mechanisms (like LSTM gates)                  | Attention weighting to prioritize context                    |
| Corpus Callosum                    | Connects left and right brain hemispheres         | Integrates information across hemispheres for unified processing. Allows coordination of bilateral functions in Steve’s body.                        | Cross-layer connections                              | Skip connections enabling long-range dependencies            |
| Neurotransmitters (e.g., Dopamine) | Distributed chemical signals                      | Modulate learning, reward processing, and motivation in brain function. Steve learns from positive experiences during hiking and social interaction. | Adaptive learning rate control                       | Dynamic learning rate adjustments based on training feedback |
| Plasticity Mechanisms              | Throughout brain (synaptic connections)           | Synaptic pruning and long-term potentiation enable learning and memory by altering connection strength.                                              | Regularization techniques like dropout, weight decay | Regularize to prevent overfitting, enhance generalization    |

---

This table aligns brain regions and functions with the first principles of signal flow and regulation, connecting each to comparable concepts in neural networks and language models.  
Steve’s examples ground abstract functions into real-world experiences during his Mountainkid Valley hike.

This table follows the **brain’s functional workflow**, from sensing and planning to movement execution and vital function regulation during Steve's encounter with the robot on the hiking trail.

# Neural Networks Overview: From First Principles

## The Brain as a Network of Neurons

- The brain is composed of **billions of neurons**, the specialized cells that transmit information.
- These neurons are **massively interconnected** through complex networks.
- Each neuron can connect to thousands of others via junctions called **synapses**.

## Parallel Working of Neurons

- Neurons operate **in parallel**, meaning many signals are processed simultaneously.
- This parallelism enables the brain to:
  - Process sensory inputs from multiple sources at once.
  - Perform complex computations rapidly.
  - Coordinate numerous body functions simultaneously.

## How Neurons Connect and Communicate

![Neuron Structure](images/neuron.png)

- A neuron receives input signals from its connected neurons.
- It integrates these inputs and decides whether to pass on the signal.
- Signals are sent electrically within the neuron and chemically across synapses.

  - The synapse is the small junction or gap where one neuron's axon terminal is very close to another neuron's dendrite or cell body.

  - It is not a direct physical connection, but a narrow space (about 20-40 nanometers wide) where chemical signals (neurotransmitters) travel across.

  - When an electrical signal (action potential) arrives at the axon terminal of the sending neuron, it triggers the release of neurotransmitters into the synaptic gap.

  - These neurotransmitters diffuse across the synapse and bind to receptors on the receiving neuron, transmitting the signal chemically.

  - This process converts the electrical signal in the first neuron into a chemical signal crossing the synapse, then back to an electrical signal in the next neuron.

  - So the synapse acts as a controlled communication bridge, managing how neurons pass messages at the microscopic scale.

- The network formed by these connections is the foundation of all brain functions: perception, movement, thought, and learning.

## Why Network Structure Matters

- The brain’s ability to learn and adapt comes from **plasticity**—the ability to strengthen or weaken synaptic connections.
- This plasticity allows networks to change structure based on experience, enabling learning and memory.
- Complex behaviors emerge from simple network interactions.

---

This understanding of the brain as a highly interconnected, parallel-processing neural network sets the stage for diving deeper into individual neuron function and how they generate electrical signals.

# Signal Types in the Brain: Electrical and Chemical Communication

## Electrical Signals Within Neurons

- Neurons communicate internally using **electrical signals** called **action potentials**.
- An action potential is a rapid change in the electrical charge inside the neuron, traveling along its length (axon).
- This electrical impulse enables fast transmission of information within the neuron itself.
- Think of it like a spark traveling down a wire, carrying a message quickly from one end of the neuron to the other.

## Chemical Signals Between Neurons

- Neurons communicate with each other at **synapses**, where the axon terminal of one neuron meets the dendrite or cell body of another.
- At the synapse, the electrical signal triggers the release of **chemical messengers** called **neurotransmitters**.
- These neurotransmitters cross the small gap (synaptic cleft) and bind to receptors on the next neuron.
- This binding can either excite or inhibit the next neuron, influencing whether it fires its own action potential.
- This chemical communication allows neurons to pass complex information and regulate brain functions dynamically.

## Combined Electrical-Chemical Signaling

- The brain’s communication system is a dynamic combination of rapid electrical signals inside neurons and slower, modulatory chemical signals between neurons.
- This dual signaling mechanism enables precise, flexible, and adaptable information processing.

---

Understanding these signal types is fundamental to grasping how neurons transmit information and interact, laying the groundwork for exploring neuron anatomy, physiology, and computational models.

### Summary: How Information Travels Across Neurons

- Information travels inside a neuron as **electrical signals** called **action potentials**.
- When the electrical signal reaches the axon terminal, it triggers the release of **chemical messengers** called **neurotransmitters**.
- Neurotransmitters cross the **synaptic gap (synapse)** between neurons.
- These chemicals bind to receptors on the receiving neuron, converting the chemical message back into an electrical signal.
- This process repeats across neuron networks, enabling complex brain functions like perception, movement, and learning.
- The brain’s network structure is flexible due to **plasticity**, which strengthens or weakens connections based on experience.
- Overall, neuron communication combines **fast electrical signaling inside neurons** and **chemical signaling between neurons** for precise, adaptable information processing.

# Cell Types in the Brain: Neurons vs. Glia

## Neurons: The Brain's Information Messengers

- Neurons are specialized cells responsible for **receiving, processing, and transmitting information**.
- They communicate via **electrical impulses** (action potentials) and **chemical signals** (neurotransmitters).
- Neurons have unique structures:
  - **Dendrites:** Receive signals from other neurons.
  - **Soma (cell body):** Integrates incoming signals.
  - **Axon:** Sends electrical signals to other neurons or muscles.
- Neurons form the core of brain function: sensation, movement, cognition, and emotions.

## Glia: The Brain's Supporting Staff

- Glial cells, or **glia**, are supporting cells that **maintain and protect neurons**.
- Types of glia include:
  - **Astrocytes:** Provide nutrients, maintain the chemical environment, and support the blood-brain barrier.
  - **Oligodendrocytes:** Form myelin sheaths around axons, speeding up electrical signals in the brain.
  - **Microglia:** Act as immune cells, removing waste and protecting against infection.
- Glia do not transmit electrical signals but are essential for healthy brain functioning.

## Why Differentiating Them Matters

- **Neurons** perform the brain’s information processing and communication.
- **Glia** provide critical support, ensuring neurons work efficiently and stay healthy.
- Understanding this division is fundamental before diving into neuron structure and signal mechanisms.

---

This foundational knowledge helps recognize the collaboration required for brain function, preparing for deeper study of neuron physiology.

# High-Level Brain Functions: Emergent from Neuronal Interaction

## Sensory Processing

- The brain receives information from the senses (sight, sound, touch, taste, smell).
- Specialized neurons process this sensory input, allowing perception of the world.
- This processing occurs primarily in sensory areas of the **cerebral cortex**.

## Motor Control

- Brain regions plan, initiate, and execute voluntary movements.
- Motor commands are refined and coordinated to perform smooth, purposeful actions.
- Control involves areas like the **primary motor cortex**, **premotor cortex**, **basal ganglia**, and **cerebellum**.

## Cognition

- Includes thinking, reasoning, problem-solving, and planning.
- Emerges from complex interactions in the **prefrontal cortex** and other cortical regions.
- Enables decision-making, attention, and working memory.

## Emotions

- Brain structures like the **limbic system** generate and regulate emotions.
- Neuronal networks integrate sensory input and internal states to produce feelings and responses.

## Autonomic Regulation

### 6.1 Neuron Anatomy: Dendrites, Soma, Axon, Myelin

![Neuron Structure](images/neuron.png)

- Neurons are special cells that send messages in your body.
- They have parts like:

- **Dendrites:** Branch-like structures extending from the neuron, designed to receive most of the incoming information in the form of chemical signals called neurotransmitters from other neurons. They have receptors that pick up these signals and convert them into electrical changes.
- **Soma (Cell Body):** Contains the nucleus, which holds the DNA (genetic material). The soma integrates all the electrical signals received by the dendrites at a special region called the **axon hillock**. If the combined signal is strong enough, it triggers the next step in the neuron.
- **Axon:** A long fiber that transmits the electrical signal, now called an **action potential**, away from the soma towards other neurons or muscle cells.
- **Myelin:** A fatty, insulating material that wraps around the axon. It prevents the electrical signal from degrading and speeds up its transmission, allowing signals to travel quickly and efficiently along the axon.

This architecture allows neurons to process and pass on information rapidly throughout the nervous system, forming the basis for all neural communication.

---

### 6.2 The Membrane: Lipid Bilayer and Ion Channels

- The neuron's **membrane** is a **phospholipid bilayer** with embedded protein pores known as **ion channels**.
- These ion channels act as tiny doors controlling the passage of charged particles (ions) like sodium (Na⁺), potassium (K⁺), calcium (Ca²⁺), and chloride (Cl⁻).
- Ion channels are classified based on how they open:
  - **Ligand-gated channels:** Open when specific chemicals (ligands), such as neurotransmitters, bind to them.
  - **Voltage-gated channels:** Open or close in response to changes in the electrical voltage across the membrane.
- Some channels are selective for particular ions:
  - **Potassium channels:** Allow potassium ions (K⁺) to flow out of the neuron.
  - **Sodium channels:** Allow sodium ions (Na⁺) to flow into the neuron during firing.
- These channels regulate ion movement, altering the neuron's electrical charge to enable signal transmission.

---

### 6.3 Resting Membrane Potential (\(\approx -70\) mV) - Clear Explanation

- The **resting membrane potential** is the electrical voltage difference across the neuron's membrane when it is **not actively sending signals.**
- Typically, this voltage is about **-70 millivolts (mV)**, meaning the **inside of the neuron is negative** compared to the outside.

#### Why does this happen?

- **Ion concentrations differ inside and outside the neuron:**

  - Inside: high concentration of **potassium ions (K⁺)** and negatively charged **organic anions (A⁻)** that cannot leave the cell (e.g., proteins and amino acids).
  - Outside: high concentration of **sodium ions (Na⁺)** and **chloride ions (Cl⁻)**.

- **Selective permeability:**

  - The membrane is **more permeable to potassium (K⁺)** than sodium (Na⁺), so potassium ions can **leak out** of the neuron through potassium channels.
  - Positively charged potassium ions leaving the cell make the inside more negative because negatively charged molecules inside cannot follow.

- **Sodium-potassium pump:**
  - Uses energy (ATP) to pump **3 sodium ions out** and **2 potassium ions in**, maintaining ion gradients and keeping the inside negative.

#### Result

- The combined effect of ion concentration differences, membrane permeability, and active pumping results in a steady membrane voltage around **-70 mV**.
- This voltage acts like a **charged battery**, keeping the neuron ready to send signals quickly when triggered.

---

**Additional facts:**

- **1 volt (V) = 1000 millivolts (mV)**
- A resting membrane potential of −70 mV means the inside is negative by about 0.07 volts.
- This small voltage difference is crucial because it allows the neuron to send electrical signals quickly when it needs to.

---

### 6.4 Threshold and Firing (\(-55\) mV Trigger)

- Neurons have a resting membrane potential of about **−70 mV**, meaning the inside of the cell is negative compared to the outside.

- When the sum of incoming signals causes the membrane voltage to rise towards **−55 mV**, this value is called the **threshold**.

- If the membrane voltage reaches this threshold, it triggers a sequence of events leading to an **action potential** (the neuron "fires"):

  1. **Voltage-gated sodium channels open** rapidly, allowing Na⁺ ions to flood inside.
  2. This sudden influx of positive ions causes rapid **depolarization**—the membrane voltage quickly rises to a positive value (up to +30 to +40 mV).
  3. After a brief peak, sodium channels close, and **voltage-gated potassium channels open**, allowing K⁺ ions to exit.
  4. The outflow of potassium ions causes **repolarization**, bringing the membrane potential back down toward the resting level.
  5. Sometimes the membrane voltage briefly dips below the resting potential, a phase called **hyperpolarization**.
  6. Finally, the neuron returns to its normal resting membrane state, ready to fire again if stimulated.

- This action potential travels along the axon as an electrical signal, enabling rapid communication between neurons or to muscle cells.

- If the membrane potential doesn’t reach the threshold, the neuron remains at rest—this all-or-none principle ensures that neurons only fire when sufficiently stimulated.

---

This mechanism, involving the critical threshold and rapid ion channel changes, forms the basis of how neurons transmit information electrically.

## Summary: Everything So Far We Discussed

Imagine Steve, a curious kid who wants to understand life:

- Everything around Steve is made of tiny building blocks called **atoms** — like LEGO pieces. When these atoms stick together, they form **molecules**, kind of like combining LEGO blocks to build something bigger.
- Molecules combine in special ways to create **cells** — the smallest living units. Think of cells like tiny factories doing many jobs to keep life going.
- Each cell has a **membrane** — its smart gatekeeper that decides what comes in and goes out. This helps the cell stay safe and balanced.
- Inside the cell, special parts called **organelles** work like machines:
  - The **nucleus** is the control center with the instructions (DNA).
  - The **mitochondria** are power plants giving energy.
  - Other organelles help build proteins, move packages, and clean up waste.
- Cells use **nutrients** like carbs and fats as fuel and building material. Fats also keep animals warm by acting as insulation.
- Groups of cells called **tissues** work together like a team — for example, muscle tissue lets Steve run and jump.
- Then there are **neurons** — special cells that send signals like tiny messengers.
  - They receive messages with **dendrites**, decide what to do in the **soma**, and send signals down a long wire called the **axon**, wrapped in insulation called **myelin** to speed things up.
  - Neurons communicate using electrical changes controlled by tiny gate-like structures called **ion channels**.
  - When the neuron gets excited enough (like reaching a threshold), it sends an electrical impulse — a signal — to other neurons or muscles.

In short: Life is complex, but it starts from a few simple, well-organized building blocks — just like Steve’s favorite addition problem.

---
