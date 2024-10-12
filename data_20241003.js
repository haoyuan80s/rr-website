
daily_data = {
    "date": "2024-10-03",
    "tweets": [
            {
                "startTime": "01:00",
                "arxivId": "2410.00425",
                "arxivLink": "https://arxiv.org/abs/2410.00425",
                "title": "ManiSkill3: Simulating Robots So Fast, They're Practically Real!",
                "institute": "University of California San Diego, Carnegie Mellon University, Hillbot...",
                "text": "This research introduces ManiSkill3, a GPU-parallelized robotics simulator that supports heterogeneous simulation and fast parallel rendering, enabling more efficient training of robot learning algorithms. Unlike previous simulators, ManiSkill3 allows for different objects, articulations, and scenes to be simulated in parallel, making it more scalable and generalizable.",
                "paper-title": "ManiSkill3: GPU Parallelized Robotics Simulation and Rendering for Generalizable Embodied AI",
                "image-path": "flux_paper_image/2410.00425_1727989017.png"
            },

            {
                "startTime": "01:24",
                "arxivId": "2410.01680",
                "arxivLink": "https://arxiv.org/abs/2410.01680",
                "title": "Teacher's Pet: How to Train a Super-Student Model with a Bunch of Teachers",
                "institute": "Nvidia",
                "text": "This research focuses on improving the training of \"agglomerative models\" by studying the impact of different teacher activation statistics on the student model's performance. It introduces a novel normalization technique called \"PHI Standardization\" (PHI-S) that uses Hadamard matrices to standardize the teacher distributions, leading to better student model performance.",
                "paper-title": "PHI-S: Distribution Balancing for Label-Free Multi-Teacher Distillation",
                "image-path": "flux_paper_image/2410.01680_1727989495.png"
            },

            {
                "startTime": "01:46",
                "arxivId": "2410.01104",
                "arxivLink": "https://arxiv.org/abs/2410.01104",
                "title": "Softmax: The Attention-Dispersing Villain of AI Reasoning",
                "institute": "Google DeepMind, University of Oxford",
                "text": "This paper demonstrates that the softmax function, a cornerstone of attention mechanisms in deep learning, inherently limits the ability of models to maintain sharp attention as the input size increases. This limitation is proven theoretically and validated empirically, setting it apart from previous work that focused on analyzing attention patterns without explicitly attributing them to the softmax function.",
                "paper-title": "softmax is not enough (for sharp out-of-distribution)",
                "image-path": "flux_paper_image/2410.01104_1727990069.png"
            },

            {
                "startTime": "02:07",
                "arxivId": "2410.00441",
                "arxivLink": "https://arxiv.org/abs/2410.00441",
                "title": "Radiology Reports Get a Makeover: AI Turns Jargon into Engaging Videos!",
                "institute": "Harvard University, Stanford University, Saint Louis University",
                "text": "This research differs from previous work by integrating multiple AI models to create a comprehensive system that translates complex radiology reports into patient-friendly video explanations.",
                "paper-title": "ReXplain: Translating Radiology into Patient-Friendly Video Reports",
                "image-path": "flux_paper_image/2410.00441_1727988357.png"
            },

            {
                "startTime": "02:31",
                "arxivId": "2410.00258",
                "arxivLink": "https://arxiv.org/abs/2410.00258",
                "title": "AI's New Best Friend: Learning the World's Secrets, One Cause at a Time",
                "institute": "VERSES AI Research Lab, Charles University, University of Oxford...",
                "text": "This paper proposes a new approach to AI alignment by focusing on enabling agents to learn the causal structure of the world, including models of other agents' preferences. This differs from previous work that often focuses on explicitly programming in safety constraints or reward functions.",
                "paper-title": "Possible principles for aligned structure learning agents",
                "image-path": "flux_paper_image/2410.00258_1727990051.png"
            },

            {
                "startTime": "02:59",
                "arxivId": "2410.01483",
                "arxivLink": "https://arxiv.org/abs/2410.01483",
                "title": "Folding Transformers: A SuperNet Solution for Merging Models",
                "institute": "Technion \u2013 Israel Institute of Technology, Habana Labs, NVIDIA Research",
                "text": "This research focuses on merging large transformer models trained on different tasks from distinct initializations, a more challenging scenario than merging models initialized from a common pre-trained network. It proposes Foldable SuperNet Merge (FS-Merge), a method that optimizes a SuperNet to fuse the original models using a feature reconstruction loss.",
                "paper-title": "Foldable SuperNets: Scalable Merging of Transformers with Different Initializations and Tasks",
                "image-path": "flux_paper_image/2410.01483_1727988732.png"
            },

            {
                "startTime": "03:21",
                "arxivId": "2410.01606",
                "arxivLink": "https://arxiv.org/abs/2410.01606",
                "title": "AI Jailbreakers: The Chatbots That Can't Be Tamed (But Now We Can Tame Them Back)",
                "institute": "Meta",
                "text": "This research introduces GOAT, an automated system that simulates how humans try to \"jailbreak\" large language models (LLMs) by engaging in multi-turn conversations. Unlike previous work that focused on finding single adversarial prompts, GOAT leverages a dynamic approach, allowing the attacker model to reason and adapt its strategies throughout the conversation.",
                "paper-title": "Automated Red Teaming with GOAT: the Generative Offensive Agent Tester",
                "image-path": "flux_paper_image/2410.01606_1727990346.png"
            },

            {
                "startTime": "03:44",
                "arxivId": "2410.01560",
                "arxivLink": "https://arxiv.org/abs/2410.01560",
                "title": "Open-Source Math AI: A 14 Million Question Challenge!",
                "institute": "NVIDIA",
                "text": "This research focuses on creating a massive open-source dataset for fine-tuning large language models (LLMs) for mathematical reasoning. Unlike previous work, which often relied on closed-source data, this study uses open-weight models to generate synthetic data, making it accessible for broader research and development.",
                "paper-title": "OpenMathInstruct-2: Accelerating AI for Math with Massive Open-Source Instruction Data",
                "image-path": "flux_paper_image/2410.01560_1727987883.png"
            },

            {
                "startTime": "04:05",
                "arxivId": "2410.01261",
                "arxivLink": "https://arxiv.org/abs/2410.01261",
                "title": "Seeing Through the Fog: A New Model for Understanding Occluded Objects",
                "institute": "University of Toronto",
                "text": "This research introduces a novel multimodal model, OCC-MLLM, specifically designed to understand occluded objects in images. It differs from previous work by incorporating a dual visual encoder module, one for general visual features and another for reconstructing occluded objects using 3D models.",
                "paper-title": "OCC-MLLM:Empowering Multimodal Large Language Model For the Understanding of Occluded Objects",
                "image-path": "flux_paper_image/2410.01261_1727988751.png"
            },

            {
                "startTime": "04:32",
                "arxivId": "2410.00988",
                "arxivLink": "https://arxiv.org/abs/2410.00988",
                "title": "GPT-4: The Idiom Whisperer - Unlocking Creative Translations with a Playful Prompt",
                "institute": "UC Santa Barbara, Caltech",
                "text": "This research explores the use of GPT-4 to generate context-aware translations of East Asian idioms, going beyond traditional dictionary-based approaches that often lack nuance and context.",
                "paper-title": "Creative and Context-Aware Translation of East Asian Idioms with GPT-4",
                "image-path": "flux_paper_image/2410.00988_1727987957.png"
            },

            {
                "startTime": "04:50",
                "arxivId": "2410.01469",
                "arxivLink": "https://arxiv.org/abs/2410.01469",
                "title": "Speech Separation on a Budget: TIGER Makes It Tiny!",
                "institute": "Tsinghua University",
                "text": "This research introduces TIGER, a speech separation model that uses a band-split strategy to reduce computational costs. Unlike previous models that focus on improving performance, TIGER prioritizes efficiency while maintaining high accuracy.",
                "paper-title": "TIGER: Time-frequency Interleaved Gain Extraction and Reconstruction for Efficient Speech Separation",
                "image-path": "flux_paper_image/2410.01469_1727989142.png"
            },

            {
                "startTime": "05:07",
                "arxivId": "2410.00709",
                "arxivLink": "https://arxiv.org/abs/2410.00709",
                "title": "Binding Affinity Prediction: From Old-School Rules to AI's Wild Ride!",
                "institute": "University of Chicago, Argonne National Laboratory, Data Science Institute...",
                "text": "This research provides a comprehensive review of binding affinity prediction methods, focusing on the shift from conventional approaches to machine learning and deep learning techniques. It highlights the increasing use of these methods due to the growing availability of protein and small molecule data.",
                "paper-title": "Binding Affinity Prediction: From Conventional to Machine Learning-Based Approaches",
                "image-path": "flux_paper_image/2410.00709_1727990597.png"
            },

            {
                "startTime": "05:28",
                "arxivId": "2410.01209",
                "arxivLink": "https://arxiv.org/abs/2410.01209",
                "title": "Fed Up with Bias? A New Algorithm for Fairer Federated Learning!",
                "institute": "Northwestern University, Google Research, Carnegie Mellon University",
                "text": "This paper introduces a theoretical framework that models client participation in federated learning (FL) as a Markov chain, allowing for the analysis of optimization convergence when clients have non-uniform and correlated participation across rounds. This is different from previous work that typically assumes independent and uniform client participation.",
                "paper-title": "Debiasing Federated Learning with Correlated Client Participation",
                "image-path": "flux_paper_image/2410.01209_1727988176.png"
            },

            {
                "startTime": "05:49",
                "arxivId": "2410.01111",
                "arxivLink": "https://arxiv.org/abs/2410.01111",
                "title": "LEGO-Learning: Building Your Own Instruction Manual",
                "institute": "University of Washington",
                "text": "This research introduces InstructioNet, a model that learns to build LEGO structures by creating its own visual instruction book. Unlike previous models that rely on long-term memory, InstructioNet uses an explicit memory stack of images to guide its assembly process.",
                "paper-title": "Learning to Build by Building Your Own Instructions",
                "image-path": "flux_paper_image/2410.01111_1727989704.png"
            },

            {
                "startTime": "06:13",
                "arxivId": "2410.00859",
                "arxivLink": "https://arxiv.org/abs/2410.00859",
                "title": "MPC Gets a Smooth Makeover: Barrier Functions to the Rescue!",
                "institute": "MIT, Microsoft, University of Oxford",
                "text": "This paper introduces a new method for smoothing Model Predictive Control (MPC) policies using log-barrier functions. Unlike previous work that focused on approximating non-smooth MPC controllers with neural networks, this research directly constructs a smooth expert controller using barrier MPC.",
                "paper-title": "Improved Sample Complexity of Imitation Learning for Barrier Model Predictive Control",
                "image-path": "flux_paper_image/2410.00859_1727989354.png"
            },

            {
                "startTime": "06:34",
                "arxivId": "2410.00435",
                "arxivLink": "https://arxiv.org/abs/2410.00435",
                "title": "Spline-tastic! New Networks Make Deep Learning More Symmetrical",
                "institute": "Peking University, Pazhou Laboratory",
                "text": "This paper introduces Equivariant Kolmogorov-Arnold Networks (EKAN), which combines the benefits of Kolmogorov-Arnold Networks (KANs) with the ability to respect symmetries in data. Unlike previous work that focused on embedding equivariance into Multi-Layer Perceptrons (MLPs), EKAN leverages the learnable activation functions of KANs to achieve equivariance.",
                "paper-title": "EKAN: Equivariant Kolmogorov-Arnold Networks",
                "image-path": "flux_paper_image/2410.00435_1727988445.png"
            },

            {
                "startTime": "07:01",
                "arxivId": "2410.01639",
                "arxivLink": "https://arxiv.org/abs/2410.01639",
                "title": "Teaching AI Ethics: How to Make LLMs Play Nice",
                "institute": "University College London",
                "text": "This research proposes a new method for aligning LLMs to human values by directly encoding moral principles into the reward function used during reinforcement learning. This differs from existing approaches that rely on inferring values from human preference data.",
                "paper-title": "Moral Alignment for LLM Agents",
                "image-path": "flux_paper_image/2410.01639_1727990245.png"
            },

            {
                "startTime": "07:18",
                "arxivId": "2410.01131",
                "arxivLink": "https://arxiv.org/abs/2410.01131",
                "title": "Transformers on a Diet: Hypersphere Training Makes Language Models Slim and Speedy",
                "institute": "Nvidia",
                "text": "This paper proposes a new architecture called the Normalized Transformer (nGPT) that normalizes all vectors within the network to lie on a unit norm hypersphere. This approach differs from previous work by focusing on controlling the norms of vectors rather than just adding normalization layers.",
                "paper-title": "nGPT: Normalized Transformer with Representation Learning on the Hypersphere",
                "image-path": "flux_paper_image/2410.01131_1727988002.png"
            },

            {
                "startTime": "07:37",
                "arxivId": "2410.00231",
                "arxivLink": "https://arxiv.org/abs/2410.00231",
                "title": "DoggyBot: Fetching Your Stuff, One Climb at a Time!",
                "institute": "Stanford University, UC San Diego",
                "text": "This research introduces a quadrupedal robot system that can perform open-vocabulary object fetching tasks in unseen indoor environments without requiring any real-world data collection or training. This is achieved by integrating a simple gripper, a learned whole-body controller, and pre-trained vision-language models (VLMs). Unlike previous work, this system focuses on enabling helpful indoor tasks that require both agile locomotion and object manipulation.",
                "paper-title": "Helpful DoggyBot: Open-World Object Fetching using Legged Robots and Vision-Language Models",
                "image-path": "flux_paper_image/2410.00231_1727990025.png"
            },

            {
                "startTime": "07:55",
                "arxivId": "2410.01440",
                "arxivLink": "https://arxiv.org/abs/2410.01440",
                "title": "Robots Get a Brain Upgrade: Equilibrium Planning Makes Them Smarter!",
                "institute": "Peking University",
                "text": "This research proposes a new approach to robotic planning called \"equilibrium sequence modeling.\" Unlike previous methods that rely on prompting or reinforcement learning, this approach uses a supervised learning framework to train LLMs to self-refine their plans.",
                "paper-title": "Closed-loop Long-horizon Robotic Planning via Equilibrium Sequence Modeling",
                "image-path": "flux_paper_image/2410.01440_1727989386.png"
            },

            {
                "startTime": "08:14",
                "arxivId": "2410.01699",
                "arxivLink": "https://arxiv.org/abs/2410.01699",
                "title": "Text-to-Image Generation Gets a Speed Boost: Jacobi Decoding Goes Probabilistic!",
                "institute": "The University of Hong Kong, Huawei Noah\u2019s Ark Lab, CUHK...",
                "text": "This research introduces a probabilistic approach to Jacobi decoding, a technique used to accelerate auto-regressive text-to-image generation. Unlike previous deterministic methods, this new approach allows for sampling-based decoding, which is crucial for generating diverse and high-quality images.",
                "paper-title": "Accelerating Auto-regressive Text-to-Image Generation with Training-free Speculative Jacobi Decoding",
                "image-path": "flux_paper_image/2410.01699_1727988851.png"
            },

            {
                "startTime": "08:39",
                "arxivId": "2410.01088",
                "arxivLink": "https://arxiv.org/abs/2410.01088",
                "title": "Data Augmentation: Filling the Gaps with Human-in-the-Loop Help!",
                "institute": "Harvard University, Apple Inc.",
                "text": "This research introduces Amplio, an interactive tool that uses human-in-the-loop techniques to improve data diversity for unstructured text datasets. Unlike previous work that focuses on freeform or structured augmentation, Amplio provides a middle ground by offering three methods: Augment with Concepts, Augment by Interpolation, and Augment with Large Language Model.",
                "paper-title": "Exploring Empty Spaces: Human-in-the-Loop Data Augmentation",
                "image-path": "flux_paper_image/2410.01088_1727988669.png"
            },

            {
                "startTime": "09:03",
                "arxivId": "2410.01748",
                "arxivLink": "https://arxiv.org/abs/2410.01748",
                "title": "LLMs: Math Whizzes or Just Good at Guessing?",
                "institute": "Google",
                "text": "This research introduces a new benchmark called Compositional GSM, which tests LLMs' ability to solve chained math problems where the answer to the first problem is used as input for the second. This differs from previous work that primarily focused on evaluating LLMs on single, isolated math problems.",
                "paper-title": "Not All LLM Reasoners Are Created Equal",
                "image-path": "flux_paper_image/2410.01748_1727990413.png"
            },

            {
                "startTime": "09:27",
                "arxivId": "2410.00257",
                "arxivLink": "https://arxiv.org/abs/2410.00257",
                "title": "AI Goes Zen: Can Language Loss Unlock Artificial Consciousness?",
                "institute": "University College London",
                "text": "This research explores the role of language in altered states of consciousness by manipulating attention weights in multimodal AI models. Unlike previous work focusing on psychedelic effects on brain regions, this study directly investigates the impact of language breakdown on simulated altered states.",
                "paper-title": "The age of spiritual machines: Language quietus induces synthetic altered states of consciousness in artificial intelligence",
                "image-path": "flux_paper_image/2410.00257_1727988217.png"
            },

            {
                "startTime": "09:48",
                "arxivId": "2410.01731",
                "arxivLink": "https://arxiv.org/abs/2410.01731",
                "title": "AI Makes Text-to-Image Art More \"Comfy\" with Prompt-Adaptive Workflows",
                "institute": "NVIDIA, Tel Aviv University",
                "text": "This research introduces the novel task of prompt-adaptive workflow generation for text-to-image models. Instead of relying on a single model, the authors propose using an LLM to automatically tailor a workflow to each user prompt, improving image quality. This approach differs from previous work that focuses on improving the diffusion model itself or exploring the input-noise space.",
                "paper-title": "ComfyGen: Prompt-Adaptive Workflows for Text-to-Image Generation",
                "image-path": "flux_paper_image/2410.01731_1727988123.png"
            },

            {
                "startTime": "10:09",
                "arxivId": "2410.00215",
                "arxivLink": "https://arxiv.org/abs/2410.00215",
                "title": "AI's Speed Demon: How Meta's Multimodal Models Got a 3.88x Speed Boost!",
                "institute": "Meta",
                "text": "This research focuses on characterizing and optimizing the inference performance of emerging multimodal generation models, going beyond traditional LLMs. It pinpoints key system design and optimization opportunities by analyzing the performance of four different generative AI models on real systems.",
                "paper-title": "Characterizing and Efficiently Accelerating Multimodal Generation Model Inference",
                "image-path": "flux_paper_image/2410.00215_1727990761.png"
            },

            {
                "startTime": "10:31",
                "arxivId": "2410.01708",
                "arxivLink": "https://arxiv.org/abs/2410.01708",
                "title": "Can AI Be Your BFF? New Study Explores Social Relationship Alignment in LLMs",
                "institute": "Meta, Carnegie Mellon University, Stanford University",
                "text": "This research explores the impact of social relationships on LLM-generated content, a gap in existing research that focuses on persona and audience alignment. It examines how LLMs respond to prompts that include information about the commenter's and poster's gender, age, and friendship closeness.",
                "paper-title": "Examining the Role of Relationship Alignment in Large Language Models",
                "image-path": "flux_paper_image/2410.01708_1727989237.png"
            },

            {
                "startTime": "10:56",
                "arxivId": "2410.00350",
                "arxivLink": "https://arxiv.org/abs/2410.00350",
                "title": "Training Big Vision Models: A Speedy, Sustainable, and (Almost) Effortless Approach",
                "institute": "University of Technology Sydney, Harvard University",
                "text": "This research introduces an automated progressive learning framework called AutoProg, which dynamically adjusts the training workload as the model grows. Unlike previous methods that rely on manual design or fixed schedules, AutoProg automatically determines when, where, and how much to grow the model, leading to significant training acceleration without sacrificing performance.",
                "paper-title": "Efficient Training of Large Vision Models via Advanced Automated Progressive Learning",
                "image-path": "flux_paper_image/2410.00350_1727989988.png"
            },

            {
                "startTime": "11:16",
                "arxivId": "2410.00382",
                "arxivLink": "https://arxiv.org/abs/2410.00382",
                "title": "LLMs Pretend to Forget: A New Trick for Selective Unlearning",
                "institute": "University of Tokyo",
                "text": "This research introduces \"in-context knowledge unlearning,\" a method that allows LLMs to selectively forget information during inference based on the context of the query. Unlike previous methods that focus on global knowledge unlearning or text classification tasks, this approach specifically targets knowledge unlearning within an in-context learning framework.",
                "paper-title": "Answer When Needed, Forget When Not: Language Models Pretend to Forget via In-Context Knowledge Unlearning",
                "image-path": "flux_paper_image/2410.00382_1727988565.png"
            },

            {
                "startTime": "11:45",
                "arxivId": "2410.01064",
                "arxivLink": "https://arxiv.org/abs/2410.01064",
                "title": "LLMs Play Truth or Dare: A Game-Theoretic Approach to Decoding Reliability",
                "institute": "Imperial College London, University of Tokyo",
                "text": "This research introduces a Bayesian Decoding Game (BDG) to enhance the consistency and reliability of LLMs. Unlike previous methods that rely on human feedback or additional training, BDG models the decoding process as a multistage game between a generator and a verifier, allowing for dynamic convergence to a consensus on the most reliable outputs.",
                "paper-title": "Truth or Deceit? A Bayesian Decoding Game Enhances Consistency and Reliability",
                "image-path": "flux_paper_image/2410.01064_1727989040.png"
            },

            {
                "startTime": "12:15",
                "arxivId": "2410.00047",
                "arxivLink": "https://arxiv.org/abs/2410.00047",
                "title": "Mind's Eye Decoded: AI Sees What You See, Even When You're Just Thinking!",
                "institute": "Yale University",
                "text": "This research goes beyond reconstructing images from direct brain recordings triggered by visual stimuli. It introduces a novel method that captures and visually represents individuals' thoughts stimulated textually.",
                "paper-title": "Looking through the mind's eye via multimodal encoder-decoder networks",
                "image-path": "flux_paper_image/2410.00047_1727989766.png"
            },

            {
                "startTime": "12:33",
                "arxivId": "2410.00083",
                "arxivLink": "https://arxiv.org/abs/2410.00083",
                "title": "Diffusion Models: Solving Inverse Problems Without Breaking a Sweat!",
                "institute": "UT Austin, KAIST, SonyAI...",
                "text": "This research provides a comprehensive overview of methods that utilize pre-trained diffusion models to solve inverse problems without requiring further training. It categorizes these methods based on the problems they address and the techniques they employ, highlighting the connections between different approaches.",
                "paper-title": "A Survey on Diffusion Models for Inverse Problems",
                "image-path": "flux_paper_image/2410.00083_1727990268.png"
            },

            {
                "startTime": "12:53",
                "arxivId": "2410.00713",
                "arxivLink": "https://arxiv.org/abs/2410.00713",
                "title": "Robots Go Rogue: New Dataset Tests Anomaly Detection in the Real World",
                "institute": "Peking University, Tsinghua University, Nanjing University",
                "text": "This research introduces a new dataset called RAD, which is specifically designed for real-life anomaly detection using robotic observations. Unlike previous datasets, RAD captures data from multiple viewpoints and includes various defects, simulating the noisy environments experienced by real robots.",
                "paper-title": "RAD: A Dataset and Benchmark for Real-Life Anomaly Detection with Robotic Observations",
                "image-path": "flux_paper_image/2410.00713_1727990317.png"
            },

            {
                "startTime": "13:19",
                "arxivId": "2410.00168",
                "arxivLink": "https://arxiv.org/abs/2410.00168",
                "title": "Speech Models Get a Semantic Makeover: Aligning Speech and Text for Better Understanding",
                "institute": "Johns Hopkins University, Meta AI Research",
                "text": "This research proposes a new approach for fusing speech into pre-trained language models (LLMs) by leveraging speech-text alignments. Unlike previous methods that concatenate speech and text or directly incorporate speech units into the LLM's vocabulary, this approach segments and compresses speech features to match the granularity of text embeddings.",
                "paper-title": "SSR: Alignment-Aware Modality Connector for Speech Language Models",
                "image-path": "flux_paper_image/2410.00168_1727987935.png"
            },

            {
                "startTime": "13:43",
                "arxivId": "2410.00004",
                "arxivLink": "https://arxiv.org/abs/2410.00004",
                "title": "Tiny Memories, Big Language: How a Little Retrieval Goes a Long Way",
                "institute": "IBM",
                "text": "This research explores the effectiveness of retrieval augmented generation (RAG) with a smaller-scale database, introducing a novel embedding model and regularization technique to improve neighbor search accuracy and generalization.",
                "paper-title": "Retro-li: Small-Scale Retrieval Augmented Generation Supporting Noisy Similarity Searches and Domain Shift Generalization",
                "image-path": "flux_paper_image/2410.00004_1727989589.png"
            },

            {
                "startTime": "14:05",
                "arxivId": "2410.01481",
                "arxivLink": "https://arxiv.org/abs/2410.01481",
                "title": "SonicSim: Simulating Speech in Motion, One Room at a Time!",
                "institute": "Tsinghua University",
                "text": "This research introduces SonicSim, a toolkit that generates highly customizable synthetic data for moving sound sources, addressing the limitations of existing real-world and synthetic datasets. Unlike previous work that primarily focused on static sound sources, SonicSim simulates the acoustic characteristics of moving sound sources in various environments.",
                "paper-title": "SonicSim: A customizable simulation platform for speech processing in moving sound source scenarios",
                "image-path": "flux_paper_image/2410.01481_1727990473.png"
            },

            {
                "startTime": "14:29",
                "arxivId": "2410.00863",
                "arxivLink": "https://arxiv.org/abs/2410.00863",
                "title": "LLMs Gone Wild: When Translations Get Chatty",
                "institute": "Google",
                "text": "This research focuses on the impact of verbose LLM outputs on translation evaluation, specifically examining how LLMs' tendency to provide additional commentary or refuse to translate affects their performance in existing evaluation frameworks.",
                "paper-title": "On the Implications of Verbose LLM Outputs: A Case Study in Translation Evaluation",
                "image-path": "flux_paper_image/2410.00863_1727988622.png"
            },

            {
                "startTime": "14:54",
                "arxivId": "2410.01404",
                "arxivLink": "https://arxiv.org/abs/2410.01404",
                "title": "3D Object Detection Gets a Skin Makeover: Gaussian-Det Learns to See Surfaces",
                "institute": "Tsinghua University",
                "text": "This paper proposes Gaussian-Det, a novel approach for 3D object detection that leverages Gaussian Splatting to represent objects as continuous surfaces. Unlike previous methods that rely on discrete point clouds or volumetric representations, Gaussian-Det utilizes surface information to improve objectness deduction and refine detection proposals.",
                "paper-title": "Gaussian-Det: Learning Closed-Surface Gaussians for 3D Object Detection",
                "image-path": "flux_paper_image/2410.01404_1727989749.png"
            },

            {
                "startTime": "15:13",
                "arxivId": "2410.01529",
                "arxivLink": "https://arxiv.org/abs/2410.01529",
                "title": "Robo-MUTUAL: Teaching Robots Multimodal Tasks with Unimodal Data!",
                "institute": "Peking University, Tsinghua University",
                "text": "This research proposes a novel framework called Robo-MUTUAL that enables robots to understand multimodal task instructions by training them solely on unimodal data. This approach differs from previous methods that require meticulously annotated multimodal data, which is often expensive and time-consuming to collect.",
                "paper-title": "Robo-MUTUAL: Robotic Multimodal Task Specification via Unimodal Learning",
                "image-path": "flux_paper_image/2410.01529_1727989716.png"
            },

            {
                "startTime": "15:37",
                "arxivId": "2410.01249",
                "arxivLink": "https://arxiv.org/abs/2410.01249",
                "title": "Policy Optimization Gets a Dual Makeover: Mirror Descent Meets Function Approximation",
                "institute": "University of Washington, Meta",
                "text": "This paper proposes a new framework called Dual Approximation Policy Optimization (DAPO) that incorporates general function approximation into policy mirror descent methods. Unlike previous approaches that use the L2-norm to measure function approximation errors, DAPO utilizes the dual Bregman divergence induced by the mirror map for policy projection.",
                "paper-title": "Dual Approximation Policy Optimization",
                "image-path": "flux_paper_image/2410.01249_1727990057.png"
            },

            {
                "startTime": "15:57",
                "arxivId": "2410.00796",
                "arxivLink": "https://arxiv.org/abs/2410.00796",
                "title": "AI Power Grid: Zero False Negatives, No Blackouts!",
                "institute": "Caltech, Microsoft, University of Washington",
                "text": "This research proposes using input-convex neural networks (ICNNs) for contingency screening in power systems. Unlike previous methods, this approach guarantees zero false negatives, ensuring that no potentially dangerous scenarios are misclassified as safe.",
                "paper-title": "Fast and Reliable $N-k$ Contingency Screening with Input-Convex Neural Networks",
                "image-path": "flux_paper_image/2410.00796_1727990618.png"
            },

            {
                "startTime": "16:20",
                "arxivId": "2410.00993",
                "arxivLink": "https://arxiv.org/abs/2410.00993",
                "title": "Bandit Control: Beyond Quadratics, We're Going Optimal!",
                "institute": "Princeton University",
                "text": "This paper presents an algorithm that achieves an optimal regret bound for bandit non-stochastic control with strongly-convex and smooth cost functions, improving upon the previously known \u02dcO(T2/3) regret bound. The key difference is the use of a Newton-based update to exploit the \u03ba0-convexity of the loss function, which allows for handling general strongly-convex smooth costs.",
                "paper-title": "Tight Rates for Bandit Control Beyond Quadratics",
                "image-path": "flux_paper_image/2410.00993_1727988840.png"
            },

            {
                "startTime": "16:47",
                "arxivId": "2410.00184",
                "arxivLink": "https://arxiv.org/abs/2410.00184",
                "title": "PET Denoising Gets a 3D Makeover: Diffusion Model Goes Volumetric!",
                "institute": "Massachusetts General Hospital, Harvard Medical School, Zhejiang University...",
                "text": "This research introduces a conditional score-based residual diffusion model (CSRD) for PET denoising. Unlike previous diffusion models, CSRD is specifically designed for volumetric data, addressing the limitations of existing models when applied to 3D PET images.",
                "paper-title": "Volumetric Conditional Score-based Residual Diffusion Model for PET/MR Denoising",
                "image-path": "flux_paper_image/2410.00184_1727990767.png"
            },

            {
                "startTime": "17:06",
                "arxivId": "2410.00746",
                "arxivLink": "https://arxiv.org/abs/2410.00746",
                "title": "Brain Scans Get a Deep Learning Makeover: AI Zaps Out Noise, Reveals Hidden Metabolites!",
                "institute": "Massachusetts General Hospital, Harvard Medical School, Medical University of Vienna...",
                "text": "This research introduces a deep learning method called WALINET for removing water and lipid signals from brain MR spectroscopic imaging (MRSI) data. Unlike conventional methods that rely on linear operations and require tedious parameter tuning, WALINET uses a convolutional neural network to identify and remove these nuisance signals, leading to faster and more accurate metabolite quantification.",
                "paper-title": "WALINET: A water and lipid identification convolutional Neural Network for nuisance signal removal in 1H MR Spectroscopic Imaging",
                "image-path": "flux_paper_image/2410.00746_1727988052.png"
            },

            {
                "startTime": "17:30",
                "arxivId": "2410.00201",
                "arxivLink": "https://arxiv.org/abs/2410.00201",
                "title": "Slides and UIs: Code-Generated Data Makes Learning a Breeze!",
                "institute": "CMU, Aalto University, University of Texas at Austin",
                "text": "This research proposes a novel method for generating synthetic, structured visuals with embedded target labels using code generation. Unlike previous work that relies on manual data collection and annotation, this approach allows for on-demand creation of training data, reducing the need for human effort.",
                "paper-title": "DreamStruct: Understanding Slides and User Interfaces via Synthetic Data Generation",
                "image-path": "flux_paper_image/2410.00201_1727990524.png"
            },

            {
                "startTime": "17:50",
                "arxivId": "2410.01463",
                "arxivLink": "https://arxiv.org/abs/2410.01463",
                "title": "LoRA in FL: Sharing the Love, Not the Matrices!",
                "institute": "University of Hong Kong, Stanford University, Shanghai Institute of Applied Physics",
                "text": "This paper proposes a new method for integrating LoRA with federated learning (FL) by selectively aggregating only the \"A\" matrices, which learn general knowledge, while keeping the \"B\" matrices, which capture client-specific knowledge, local. This differs from previous work that either freezes the \"A\" matrices or aggregates both \"A\" and \"B\" matrices, potentially leading to suboptimal performance.",
                "paper-title": "Selective Aggregation for Low-Rank Adaptation in Federated Learning",
                "image-path": "flux_paper_image/2410.01463_1727989974.png"
            },

            {
                "startTime": "18:24",
                "arxivId": "2410.01444",
                "arxivLink": "https://arxiv.org/abs/2410.01444",
                "title": "Language Models: They're Not Just Good at Words, They're Good at Geometry!",
                "institute": "University College London, Montreal Institute for Learning Algorithms, University of Toronto...",
                "text": "This research explores the relationship between the compositionality of language and the geometric complexity of representations learned by language models. Unlike previous work, it investigates how this relationship evolves over training and distinguishes between formal and semantic compositionality.",
                "paper-title": "Geometric Signatures of Compositionality Across a Language Model's Lifetime",
                "image-path": "flux_paper_image/2410.01444_1727988975.png"
            },

            {
                "startTime": "18:49",
                "arxivId": "2410.01153",
                "arxivLink": "https://arxiv.org/abs/2410.01153",
                "title": "Text to Physics: Turning Words into Simulations!",
                "institute": "CMU",
                "text": "This research introduces a new method for using latent diffusion models to generate physics simulations. Unlike previous work that focuses on autoregressive methods, this approach generates an entire solution trajectory at once, potentially improving accuracy and efficiency.",
                "paper-title": "Text2PDE: Latent Diffusion Models for Accessible Physics Simulation",
                "image-path": "flux_paper_image/2410.01153_1727990820.png"
            },

            {
                "startTime": "19:11",
                "arxivId": "2410.01137",
                "arxivLink": "https://arxiv.org/abs/2410.01137",
                "title": "LLMs: Not Just for Chatbots, They're Solving PDEs Now!",
                "institute": "CMU",
                "text": "This research integrates text descriptions of physical systems into a neural operator model, FactFormer, to improve its performance in solving partial differential equations (PDEs). Unlike previous work that primarily relies on data-driven approaches, this method leverages the understanding of LLMs to incorporate system information like boundary conditions and governing equations.",
                "paper-title": "Explain Like I'm Five: Using LLMs to Improve PDE Surrogate Models with Text",
                "image-path": "flux_paper_image/2410.01137_1727987947.png"
            },

            {
                "startTime": "19:34",
                "arxivId": "2410.00079",
                "arxivLink": "https://arxiv.org/abs/2410.00079",
                "title": "AI Planning: Let Humans Help!",
                "institute": "Rutgers University, Microsoft",
                "text": "This research introduces Interactive Speculative Planning, a method that combines an efficient but less accurate agent with a more powerful but slower agent. The key difference is that it allows human users to intervene and provide input during the planning process, potentially speeding up the overall task completion.",
                "paper-title": "Interactive Speculative Planning: Enhance Agent Efficiency through Co-design of System and User Interface",
                "image-path": "flux_paper_image/2410.00079_1727989392.png"
            },

            {
                "startTime": "19:54",
                "arxivId": "2410.00296",
                "arxivLink": "https://arxiv.org/abs/2410.00296",
                "title": "Unlabeled Data: The Secret Weapon for Defending Vision-Language Models from Malicious Prompts",
                "institute": "Microsoft, University of Wisconsin-Madison",
                "text": "This research introduces VLMGUARD, a framework that leverages unlabeled user prompts to detect malicious prompts in vision-language models (VLMs). Unlike previous methods that rely on labeled data, VLMGUARD utilizes a novel maliciousness estimation score derived from VLM representations to distinguish between benign and malicious samples within unlabeled data.",
                "paper-title": "VLMGuard: Defending VLMs against Malicious Prompts via Unlabeled Data",
                "image-path": "flux_paper_image/2410.00296_1727990397.png"
            },

            {
                "startTime": "20:21",
                "arxivId": "2410.01623",
                "arxivLink": "https://arxiv.org/abs/2410.01623",
                "title": "LLMs on a Diet: Full-Rank Training with Low-Rank Constraints",
                "institute": "Beijing Institute of Technology, Peking University, Chinese University of Hong Kong",
                "text": "This paper proposes a new training framework called Fira that allows for full-rank training of LLMs while maintaining low-rank constraints, unlike previous methods that either constrain weights or gradients to a low-rank subspace.",
                "paper-title": "Fira: Can We Achieve Full-rank Training of LLMs Under Low-rank Constraint?",
                "image-path": "flux_paper_image/2410.01623_1727989022.png"
            },

            {
                "startTime": "20:53",
                "arxivId": "2410.00772",
                "arxivLink": "https://arxiv.org/abs/2410.00772",
                "title": "Self-Supervised Learning: Overfitting? Not If You Undo Memorization!",
                "institute": "Tsinghua University, Hong Kong University of Science and Technology",
                "text": "This research proposes a novel method called Undoing Memorization Mechanism (UMM) to address the overfitting problem in self-supervised learning (SSL) models. UMM works by aligning the feature distributions of early and late layers in the model, maximizing the coding rate reduction of the last layer output. This approach differs from previous work by focusing on the overfitting issue in SSL and using coding rate reduction as a metric to quantify it.",
                "paper-title": "On the Generalization and Causal Explanation in Self-Supervised Learning",
                "image-path": "flux_paper_image/2410.00772_1727990075.png"
            },

            {
                "startTime": "21:35",
                "arxivId": "2410.01101",
                "arxivLink": "https://arxiv.org/abs/2410.01101",
                "title": "Offline MARL: Low Interaction Rank Makes Agents Play Nice!",
                "institute": "Princeton University, Meta",
                "text": "This paper introduces the concept of interaction rank (IR) in offline multi-agent reinforcement learning (MARL). Unlike previous work that focused on general function classes, this research explores the benefits of using function classes with low IR, demonstrating that they are more robust to distribution shift.",
                "paper-title": "Exploiting Structure in Offline Multi-Agent RL: The Benefits of Low Interaction Rank",
                "image-path": "flux_paper_image/2410.01101_1727989800.png"
            },

            {
                "startTime": "22:02",
                "arxivId": "2410.00630",
                "arxivLink": "https://arxiv.org/abs/2410.00630",
                "title": "Three Photos, One Amazing Face: New AI Makes 3D Portraits From Sparse Snapshots",
                "institute": "ETH Zurich, Google",
                "text": "This research proposes a novel volumetric prior for human faces that enables high-fidelity expressive face modeling from as few as three input views. Unlike previous methods that rely on dense multi-view captures or require domain adaptation, this approach leverages a synthetic dataset to train a prior model that can generalize to real-world identities and expressions.",
                "paper-title": "Cafca: High-quality Novel View Synthesis of Expressive Faces from Casual Few-shot Captures",
                "image-path": "flux_paper_image/2410.00630_1727989295.png"
            },

            {
                "startTime": "22:22",
                "arxivId": "2410.01350",
                "arxivLink": "https://arxiv.org/abs/2410.01350",
                "title": "Takin-VC: Voice Conversion Gets a Memory Boost!",
                "institute": "Ximalaya Inc., Kyushu University, Northwestern Polytechnical University...",
                "text": "This research introduces Takin-VC, a zero-shot voice conversion framework that uses a hybrid content encoder and a memory-augmented timbre modeling approach to improve speaker similarity and speech naturalness. Unlike previous methods, Takin-VC leverages both phonetic posterior-grams (PPGs) and quantized self-supervised learning (SSL) features to capture linguistic content more effectively. Additionally, it incorporates a memory module to generate high-quality conditional target inputs for the flow matching model, further enhancing speaker similarity.",
                "paper-title": "Takin-VC: Zero-shot Voice Conversion via Jointly Hybrid Content and Memory-Augmented Context-Aware Timbre Modeling",
                "image-path": "flux_paper_image/2410.01350_1727989931.png"
            },

            {
                "startTime": "22:52",
                "arxivId": "2410.00354",
                "arxivLink": "https://arxiv.org/abs/2410.00354",
                "title": "AI Traders: Can Bots Mimic Wall Street's Best?",
                "institute": "National Institute of Advanced Industrial Science and Technology, Ochanomizu University, University of Tokyo",
                "text": "This research explores the use of hierarchical multi-agent simulations, where different AI agents with varying levels of expertise interact to make investment decisions, mimicking the decision-making processes found in real-world investment firms. This approach differs from previous studies that primarily focused on single-agent models or simpler communication strategies.",
                "paper-title": "Hierarchical Organization Simulacra in the Investment Sector",
                "image-path": "flux_paper_image/2410.00354_1727989205.png"
            },

            {
                "startTime": "23:13",
                "arxivId": "2410.01169",
                "arxivLink": "https://arxiv.org/abs/2410.01169",
                "title": "AI Analyst's Dilemma: When to Spill the Tea?",
                "institute": "National Institute of Advanced Industrial Science and Technology, Ochanomizu University, University of Tokyo",
                "text": "This research introduces a novel task: identifying the optimal timing for expressing opinions triggered by news. Unlike previous work focusing on sentiment analysis or opinion generation, this study explores the decision-making process of professionals, specifically when they choose to release reports based on new information.",
                "paper-title": "GADFA: Generator-Assisted Decision-Focused Approach for Opinion Expressing Timing Identification",
                "image-path": "flux_paper_image/2410.01169_1727989843.png"
            },

            {
                "startTime": "23:50",
                "arxivId": "2410.00847",
                "arxivLink": "https://arxiv.org/abs/2410.00847",
                "title": "Reward Models That Know When They Don't Know: A New Approach to LLM Alignment",
                "institute": "Chinese Academy of Sciences, Tsinghua University",
                "text": "This research introduces Uncertainty-aware Reward Models (URM) and Uncertainty-aware Reward Model Ensembles (URME) to address the stochasticity of human preferences and the lack of knowledge in reward models. Unlike previous work, which relies on deterministic reward modeling, URM and URME model the distribution of rewards and quantify uncertainty through discrepancies in the ensemble.",
                "paper-title": "Uncertainty-aware Reward Model: Teaching Reward Models to Know What is Unknown",
                "image-path": "flux_paper_image/2410.00847_1727989743.png"
            },

            {
                "startTime": "24:13",
                "arxivId": "2410.01109",
                "arxivLink": "https://arxiv.org/abs/2410.01109",
                "title": "LLMs: Mixing It Up for Financial Finesse!",
                "institute": "Microsoft",
                "text": "This research explores the impact of multi-task fine-tuning on LLMs for financial tasks, demonstrating that training on a combination of related tasks can significantly improve performance compared to single-task fine-tuning.",
                "paper-title": "Mixing It Up: The Cocktail Effect of Multi-Task Fine-Tuning on LLM Performance -- A Case Study in Finance",
                "image-path": "flux_paper_image/2410.01109_1727988244.png"
            },

            {
                "startTime": "24:33",
                "arxivId": "2410.00490",
                "arxivLink": "https://arxiv.org/abs/2410.00490",
                "title": "Swimming Robots Learn to Flow: Neural ODEs Take the Plunge!",
                "institute": "TU Delft, Westlake University, University College London",
                "text": "This research introduces a novel data-driven hydrodynamic model for amphibious quadruped robots using Neural Ordinary Differential Equations (ODEs) combined with attention mechanisms. This approach differs from previous work by leveraging real-time sensor data to learn and adapt to varying underwater conditions, enabling more accurate force prediction and robust decision-making.",
                "paper-title": "Learning Adaptive Hydrodynamic Models Using Neural ODEs in Complex Conditions",
                "image-path": "flux_paper_image/2410.00490_1727987898.png"
            },

            {
                "startTime": "24:54",
                "arxivId": "2410.00059",
                "arxivLink": "https://arxiv.org/abs/2410.00059",
                "title": "DNNs on Lockdown: New Method Keeps Models Safe from Piracy",
                "institute": "University of California San Diego, University of California Irvine, University of California Los Angeles",
                "text": "This paper proposes a new method for protecting DNN models from unauthorized access by treating active authorization as an inverse problem of domain adaptation. It uses a mixture-of-experts model to minimize the mutual information between authorized and unauthorized domains, ensuring that the model only performs well on authorized inputs.",
                "paper-title": "IDEA: An Inverse Domain Expert Adaptation Based Active DNN IP Protection Method",
                "image-path": "flux_paper_image/2410.00059_1727988727.png"
            },

            {
                "startTime": "25:16",
                "arxivId": "2410.00046",
                "arxivLink": "https://arxiv.org/abs/2410.00046",
                "title": "AI for Radiotherapy: One Size Doesn't Fit All, So Let's Mix It Up!",
                "institute": "Mayo Clinic, Harvard University",
                "text": "This research introduces the Mixture of Multicenter Experts (MoME) approach, which aims to improve the generalizability of AI models in radiotherapy by integrating specialized expertise from diverse clinical strategies. This differs from previous work that often relies on single-center training, which can lead to biased models.",
                "paper-title": "Mixture of Multicenter Experts in Multimodal Generative AI for Advanced Radiotherapy Target Delineation",
                "image-path": "flux_paper_image/2410.00046_1727989969.png"
            },

            {
                "startTime": "25:43",
                "arxivId": "2410.01620",
                "arxivLink": "https://arxiv.org/abs/2410.01620",
                "title": "Ophthalmology's AI Vision Test: Can LLMs See What Doctors Do?",
                "institute": "Yale University",
                "text": "This research introduces LMOD, a new dataset and benchmark specifically designed for evaluating large vision-language models (LVLMs) on ophthalmology images. Unlike previous benchmarks, LMOD covers multiple imaging modalities and tasks, including anatomical understanding, disease diagnosis, and demographic extraction.",
                "paper-title": "LMOD: A Large Multimodal Ophthalmology Dataset and Benchmark for Large Vision-Language Models",
                "image-path": "flux_paper_image/2410.01620_1727988920.png"
            },

            {
                "startTime": "26:08",
                "arxivId": "2410.01405",
                "arxivLink": "https://arxiv.org/abs/2410.01405",
                "title": "Looped Transformers: They're Not Just Efficient, They're Turing Complete!",
                "institute": "University of Tokyo",
                "text": "This paper establishes approximation rates for Looped Transformers by defining the modulus of continuity for sequence-to-sequence functions. It also introduces a time-dependent scaling parameter to improve the model's expressive power.",
                "paper-title": "On Expressive Power of Looped Transformers: Theoretical Analysis and Enhancement via Timestep Encoding",
                "image-path": "flux_paper_image/2410.01405_1727988883.png"
            },

            {
                "startTime": "26:30",
                "arxivId": "2410.01644",
                "arxivLink": "https://arxiv.org/abs/2410.01644",
                "title": "Federated Learning Goes Hybrid: When Horizontal Meets Vertical!",
                "institute": "University of Cambridge, Commonwealth Scientific and Industrial Research Organisation, Nanyang Technological University",
                "text": "This research proposes a novel hybrid federated learning framework called HoVeFL, which combines horizontal and vertical federated learning strategies. Unlike previous work that focuses solely on either horizontal or vertical learning, HoVeFL allows devices to train on both shared features across different datasets and different features from the same dataset.",
                "paper-title": "A Novel Framework of Horizontal-Vertical Hybrid Federated Learning for EdgeIoT",
                "image-path": "flux_paper_image/2410.01644_1727990773.png"
            },

            {
                "startTime": "26:57",
                "arxivId": "2410.00835",
                "arxivLink": "https://arxiv.org/abs/2410.00835",
                "title": "Solving High-Dimensional Equations: A Finite Expression Method Takes the Stage!",
                "institute": "Purdue University, University of Maryland",
                "text": "This paper introduces a new method, FEX-PG, for solving high-dimensional partial integro-differential equations (PIDEs). It builds upon the original FEX method by incorporating a novel parameter grouping technique and a Taylor series approximation for the integral terms. This approach aims to improve computational efficiency and accuracy while maintaining interpretability of the solutions.",
                "paper-title": "Solving High-Dimensional Partial Integral Differential Equations: The Finite Expression Method",
                "image-path": "flux_paper_image/2410.00835_1727990181.png"
            },

            {
                "startTime": "27:19",
                "arxivId": "2410.00454",
                "arxivLink": "https://arxiv.org/abs/2410.00454",
                "title": "UniAdapt: LLMs Get a Knowledge Makeover, No Retraining Required!",
                "institute": "Google Research, University of California Berkeley, University of Illinois at Urbana-Champaign...",
                "text": "UniAdapt introduces a novel approach to lifelong model editing by utilizing a vector-assisted router and multiple parallel experts. Unlike previous methods that rely on memory-based routing, UniAdapt leverages semantic similarity to route queries to the most relevant experts, enhancing both generalization and locality.",
                "paper-title": "UniAdapt: A Universal Adapter for Knowledge Calibration",
                "image-path": "flux_paper_image/2410.00454_1727988167.png"
            },

            {
                "startTime": "27:40",
                "arxivId": "2410.00193",
                "arxivLink": "https://arxiv.org/abs/2410.00193",
                "title": "Vision-Language Models: Diagram Savants or Knowledge Cheaters?",
                "institute": "ETH Zurich",
                "text": "This research evaluates the ability of Large Vision-Language Models (LVLMs) to understand diagrams by focusing on their ability to recognize and reason about entities and relations. The study uses a comprehensive test suite with both synthetic and real diagrams, and it finds that while LVLMs can identify entities, their understanding of relations is limited.",
                "paper-title": "Do Vision-Language Models Really Understand Visual Language?",
                "image-path": "flux_paper_image/2410.00193_1727990530.png"
            },

            {
                "startTime": "28:02",
                "arxivId": "2410.01093",
                "arxivLink": "https://arxiv.org/abs/2410.01093",
                "title": "Missing Data? No Problem! Logistic Regression Gets a High-Dimensional Makeover",
                "institute": "University of Cambridge, Georgia Institute of Technology, Stanford University",
                "text": "This research extends the study of high-dimensional logistic regression to scenarios where data is missing completely at random (MCAR). It provides exact characterizations of both prediction and estimation errors, even when the data matrix used for inference differs from the one used to generate the labels.",
                "paper-title": "High-dimensional logistic regression with missing data: Imputation, regularization, and universality",
                "image-path": "flux_paper_image/2410.01093_1727989085.png"
            },

            {
                "startTime": "28:22",
                "arxivId": "2410.01366",
                "arxivLink": "https://arxiv.org/abs/2410.01366",
                "title": "Style Transfer Without Training: A Diffusion Model's Magic Trick",
                "institute": "CyberAgent, University of Tokyo",
                "text": "This research proposes a new style transfer algorithm called STRDP that doesn't require any additional training. It leverages the latent space of a pre-trained Latent Diffusion Model (LDM) and applies Adaptive Instance Normalization (AdaIN) repeatedly during the reverse diffusion process. This approach differs from previous methods that either require training or operate directly on the image space, leading to higher computational costs.",
                "paper-title": "Harnessing the Latent Diffusion Model for Training-Free Image Style Transfer",
                "image-path": "flux_paper_image/2410.01366_1727989362.png"
            },

            {
                "startTime": "28:44",
                "arxivId": "2410.00876",
                "arxivLink": "https://arxiv.org/abs/2410.00876",
                "title": "Knowledge Graph Completion: Ditch the Paths, Embrace the Bias!",
                "institute": "Rensselaer, IBM",
                "text": "This research proposes a new approach to knowledge graph completion that eliminates the need for path encoding modules, which are often time-consuming and require extensive hyperparameter tuning. Instead, the authors introduce connection-biased attention and entity role embeddings into a Transformer-based subgraph encoding module.",
                "paper-title": "Replacing Paths with Connection-Biased Attention for Knowledge Graph Completion",
                "image-path": "flux_paper_image/2410.00876_1727990175.png"
            },

            {
                "startTime": "29:07",
                "arxivId": "2410.00363",
                "arxivLink": "https://arxiv.org/abs/2410.00363",
                "title": "Fusing Models Like a Pro: Likelihood Composition for Multi-Modal Language Models",
                "institute": "Shanghai AI Laboratory, CUHK, East China Normal University...",
                "text": "This research proposes a post-hoc framework called \"likelihood composition\" for fusing heterogeneous models. Unlike previous methods that require training or similar architectures, this approach manipulates the likelihood distributions of candidate answers, making it training-free and adaptable to diverse models.",
                "paper-title": "Unleashing the Potentials of Likelihood Composition for Multi-modal Language Models",
                "image-path": "flux_paper_image/2410.00363_1727989914.png"
            },

            {
                "startTime": "29:38",
                "arxivId": "2410.01086",
                "arxivLink": "https://arxiv.org/abs/2410.01086",
                "title": "Deep Dive into Deep Survival: Neural Networks Predict When You'll Kick the Bucket",
                "institute": "Carnegie Mellon University",
                "text": "This research provides a comprehensive introduction to deep survival analysis models, focusing on how these models are related and the overarching principles behind their development. It distinguishes between innovations specific to time-to-event prediction and those that are not, emphasizing the former.",
                "paper-title": "An Introduction to Deep Survival Analysis Models for Predicting Time-to-Event Outcomes",
                "image-path": "flux_paper_image/2410.01086_1727989518.png"
            },

            {
                "startTime": "29:59",
                "arxivId": "2410.01727",
                "arxivLink": "https://arxiv.org/abs/2410.01727",
                "title": "AI Tutor Gets Smarter: LLMs Help Students Learn Faster!",
                "institute": "ETH Zurich, Ludwig Maximilian University of Munich",
                "text": "This research proposes a new framework called KCQRL that automates the process of identifying knowledge concepts (KCs) in questions and then uses contrastive learning to generate semantically rich embeddings for questions and solution steps. This differs from previous work by explicitly incorporating the semantics of questions and KCs, rather than treating them as mere identifiers.",
                "paper-title": "Automated Knowledge Concept Annotation and Question Representation Learning for Knowledge Tracing",
                "image-path": "flux_paper_image/2410.01727_1727989489.png"
            },

            {
                "startTime": "30:22",
                "arxivId": "2410.01395",
                "arxivLink": "https://arxiv.org/abs/2410.01395",
                "title": "Blurry Robot Vision? This New Method Clears Things Up!",
                "institute": "Shanghai University, Peking University, Nanjing University",
                "text": "This research proposes an unsupervised zero-shot dehazing method (RSF-Dehaze) for robotic vision in urological surgery. Unlike previous methods that rely on paired clean and blurry data for training, RSF-Dehaze learns to dehaze from a single input image.",
                "paper-title": "Toward Zero-Shot Learning for Visual Dehazing of Urological Surgical Robots",
                "image-path": "flux_paper_image/2410.01395_1727989349.png"
            },

            {
                "startTime": "30:44",
                "arxivId": "2410.01262",
                "arxivLink": "https://arxiv.org/abs/2410.01262",
                "title": "Diffusion Models: Team Up for Fine-Grained Control!",
                "institute": "Sun Yat-Sen University, University of Toronto",
                "text": "This paper introduces a novel algorithm called AMDM (Aggregation of Multi Diffusion Models) that aggregates intermediate variables from different conditional diffusion models, enhancing their learned representations for fine-grained control. This approach differs from previous work by leveraging the shared theoretical foundation of diffusion models to combine their strengths without requiring additional training or complex datasets.",
                "paper-title": "Aggregation of Multi Diffusion Models for Enhancing Learned Representations",
                "image-path": "flux_paper_image/2410.01262_1727988761.png"
            },

            {
                "startTime": "31:12",
                "arxivId": "2410.00151",
                "arxivLink": "https://arxiv.org/abs/2410.00151",
                "title": "Scheherazade: LLMs Get Lost in a Math Maze of Chained Problems!",
                "institute": "Yale University",
                "text": "This research introduces Scheherazade, a method for automatically generating challenging math reasoning benchmarks by logically chaining existing problems together. This differs from previous work that focused on manual or template-based approaches.",
                "paper-title": "Scheherazade: Evaluating Chain-of-Thought Math Reasoning in LLMs with Chain-of-Problems",
                "image-path": "flux_paper_image/2410.00151_1727989982.png"
            },

            {
                "startTime": "31:31",
                "arxivId": "2410.00890",
                "arxivLink": "https://arxiv.org/abs/2410.00890",
                "title": "Flex3D: Generating 3D Objects From Scratch, One View at a Time!",
                "institute": "Meta, University of Oxford",
                "text": "This research introduces Flex3D, a novel framework that generates high-quality 3D objects from text or images by leveraging an arbitrary number of input views. Unlike previous methods that rely on a fixed number of views, Flex3D generates a pool of candidate views and then selects the best ones for reconstruction.",
                "paper-title": "Flex3D: Feed-Forward 3D Generation With Flexible Reconstruction Model And Input View Curation",
                "image-path": "flux_paper_image/2410.00890_1727990664.png"
            },

            {
                "startTime": "31:52",
                "arxivId": "2410.00880",
                "arxivLink": "https://arxiv.org/abs/2410.00880",
                "title": "AI Matchmaker: Finding the Perfect Team for Your Software Woes",
                "institute": "University of Illinois, Microsoft",
                "text": "This research proposes a novel system called GEMS, which leverages Large Foundation Models (LFMs) to generate metrics for identifying teams with specific expertise within software corporations. Unlike previous work that relies on pre-defined metrics, GEMS uses prompt engineering to extract and summarize theories from expert literature, transforming them into context-aware metrics.",
                "paper-title": "GEMS: Generative Expert Metric System through Iterative Prompt Priming",
                "image-path": "flux_paper_image/2410.00880_1727988368.png"
            },

            {
                "startTime": "32:14",
                "arxivId": "2410.01174",
                "arxivLink": "https://arxiv.org/abs/2410.01174",
                "title": "Steering LLMs to Safety: A Category-Specific Approach",
                "institute": "Nvidia, Arizona State University",
                "text": "This research explores category-specific safety steering of LLMs at inference time, using steering vectors computed from model activations. Unlike previous work, it focuses on fine-grained control over steering and investigates different methods for extracting informative steering vectors.",
                "paper-title": "Towards Inference-time Category-wise Safety Steering for Large Language Models",
                "image-path": "flux_paper_image/2410.01174_1727989642.png"
            },

            {
                "startTime": "32:45",
                "arxivId": "2410.01360",
                "arxivLink": "https://arxiv.org/abs/2410.01360",
                "title": "Eye-Spy: New Tech Makes Realistic Eyelids From Just Your Phone!",
                "institute": "Tsinghua University",
                "text": "This research proposes a novel method for reconstructing and animating eyelids using only an RGB video captured by a mobile phone. Unlike previous methods that require expensive multi-camera setups or rely on pre-designed blendshapes, this approach leverages eyeball information to achieve detailed results with lightweight captures.",
                "paper-title": "High-quality Animatable Eyelid Shapes from Lightweight Captures",
                "image-path": "flux_paper_image/2410.01360_1727988182.png"
            },

            {
                "startTime": "33:06",
                "arxivId": "2410.01656",
                "arxivLink": "https://arxiv.org/abs/2410.01656",
                "title": "Unlocking the Secrets of Truncated Data: Beyond Gaussians, Faster Than Ever!",
                "institute": "Yale University",
                "text": "This research extends previous work on estimating parameters from truncated data by providing algorithms that work for a wider range of distributions, including general Gaussian distributions and certain exponential families. It also introduces a new algorithm that achieves polynomial time complexity for simple survival sets like halfspaces and axis-aligned rectangles, unlike previous work which required exponential time.",
                "paper-title": "Efficient Statistics With Unknown Truncation, Polynomial Time Algorithms, Beyond Gaussians",
                "image-path": "flux_paper_image/2410.01656_1727990682.png"
            },

            {
                "startTime": "33:30",
                "arxivId": "2410.01537",
                "arxivLink": "https://arxiv.org/abs/2410.01537",
                "title": "Attention Layers: The Secret Sauce for Sparse Token Regression?",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This paper introduces a new task called \"single-location regression\" where the output depends on a single token in a sequence, and the location of that token is a random variable. The authors propose a simplified attention layer that provably solves this task, demonstrating the ability of attention mechanisms to handle sparse token information and internal linear structures.",
                "paper-title": "Attention layers provably solve single-location regression",
                "image-path": "flux_paper_image/2410.01537_1727989426.png"
            },

            {
                "startTime": "33:59",
                "arxivId": "2410.01160",
                "arxivLink": "https://arxiv.org/abs/2410.01160",
                "title": "GraphRevisedIE: Document Extraction Gets a Graph Makeover!",
                "institute": "University of Michigan, University of Science and Technology of China",
                "text": "This research introduces GraphRevisedIE, a model that uses graph revision and convolution to enrich multimodal feature embedding for document information extraction. Unlike previous graph-based methods, GraphRevisedIE does not enforce a fully connected graph and supports adding new edges, making it more adaptable to sparse document graphs.",
                "paper-title": "GraphRevisedIE: Multimodal information extraction with graph-revised network",
                "image-path": "flux_paper_image/2410.01160_1727989772.png"
            },

            {
                "startTime": "34:21",
                "arxivId": "2410.00373",
                "arxivLink": "https://arxiv.org/abs/2410.00373",
                "title": "Traffic Forecasting: When the Roads Get a Makeover, Can Your Model Keep Up?",
                "institute": "Southern University of Science and Technology, Didi Global, Jilin University...",
                "text": "This research introduces a novel Mixture of Experts (MoE) framework for traffic forecasting that specifically addresses the challenge of spatial shifts in traffic patterns over time. Unlike previous methods that focus on temporal shifts or require manual dataset modifications, this approach learns a set of graph generators (graphons) during training and adaptively combines them to handle spatial distribution shifts during testing.",
                "paper-title": "Robust Traffic Forecasting against Spatial Shift over Years",
                "image-path": "flux_paper_image/2410.00373_1727989887.png"
            },

            {
                "startTime": "34:51",
                "arxivId": "2410.00385",
                "arxivLink": "https://arxiv.org/abs/2410.00385",
                "title": "Traffic Forecasting Gets a Speed Boost: STGformer Outperforms the Competition!",
                "institute": "Southern University of Science and Technology, Didi Global, Jilin University...",
                "text": "This research introduces STGformer, a novel spatiotemporal graph transformer architecture that efficiently captures both global and local traffic patterns. Unlike previous methods that rely on multiple attention layers, STGformer achieves this in a single layer, significantly reducing computational cost.",
                "paper-title": "STGformer: Efficient Spatiotemporal Graph Transformer for Traffic Forecasting",
                "image-path": "flux_paper_image/2410.00385_1727990094.png"
            },

            {
                "startTime": "35:18",
                "arxivId": "2410.01686",
                "arxivLink": "https://arxiv.org/abs/2410.01686",
                "title": "Transformers Get Positional: Outsmarting OOD with Fixed Encodings!",
                "institute": "Google",
                "text": "This paper introduces positional attention, where attention weights are determined solely by fixed positional encodings, unlike standard self-attention which uses both input values and positional encodings. This approach is shown to improve out-of-distribution (OOD) generalization performance in algorithmic reasoning tasks.",
                "paper-title": "Positional Attention: Out-of-Distribution Generalization and Expressivity for Neural Algorithmic Reasoning",
                "image-path": "flux_paper_image/2410.01686_1727989612.png"
            },

            {
                "startTime": "35:37",
                "arxivId": "2410.00871",
                "arxivLink": "https://arxiv.org/abs/2410.00871",
                "title": "Mamba & Transformer: A Visionary Duo Gets a Pretraining Power-Up!",
                "institute": "Tsinghua University, Shanghai AI Laboratory, Shanghai Qi Zhi Institute",
                "text": "This research proposes a novel pretraining strategy called Masked Autoregressive Pretraining (MAP) specifically designed for hybrid Mamba-Transformer vision backbones. Unlike previous methods, MAP leverages both local Masked Autoencoder (MAE) and global autoregressive pretraining to optimize the learning process for both Mamba and Transformer modules within a unified framework.",
                "paper-title": "MAP: Unleashing Hybrid Mamba-Transformer Vision Backbone's Potential with Masked Autoregressive Pretraining",
                "image-path": "flux_paper_image/2410.00871_1727990042.png"
            },

            {
                "startTime": "36:04",
                "arxivId": "2410.00318",
                "arxivLink": "https://arxiv.org/abs/2410.00318",
                "title": "Can AI Build a Bridge? New Study Tests Mechanical Reasoning in Vision Language Models",
                "institute": "University of Michigan, CMU",
                "text": "This research investigates the mechanical reasoning abilities of Vision Language Models (VLMs) using a new benchmark called MechBench, which contains 141 cognitive experiments designed to assess understanding of various mechanical systems. This approach differs from previous work by focusing specifically on mechanical reasoning within a comprehensive and diverse set of cognitive tasks.",
                "paper-title": "Probing Mechanical Reasoning in Large Vision Language Models",
                "image-path": "flux_paper_image/2410.00318_1727990223.png"
            },

            {
                "startTime": "36:30",
                "arxivId": "2410.00629",
                "arxivLink": "https://arxiv.org/abs/2410.00629",
                "title": "Illuminating the Future: 3D Reconstruction Makes Feature Extraction Shine!",
                "institute": "Peking University, Hong Kong University of Science and Technology, University of Health and Rehabilitation Sciences",
                "text": "This research proposes a novel illumination-robust feature extractor that utilizes relightable 3D reconstruction for data augmentation. Unlike previous methods that rely on large datasets or image-illumination transformations, this approach generates images with varying illumination conditions directly from 3D models, enabling precise control and reducing the need for extensive data collection.",
                "paper-title": "An Illumination-Robust Feature Extractor Augmented by Relightable 3D Reconstruction",
                "image-path": "flux_paper_image/2410.00629_1727989421.png"
            },

            {
                "startTime": "36:49",
                "arxivId": "2410.00229",
                "arxivLink": "https://arxiv.org/abs/2410.00229",
                "title": "Probability Distributions: The New Frontier for Inverse Problems!",
                "institute": "University of Wisconsin-Madison, Cornell University, University of Minnesota",
                "text": "This research extends the traditional inverse problem framework, which typically operates in Euclidean spaces, to the space of probability distributions. This shift allows for the analysis of problems where the unknown parameter is a probability measure, rather than a single value.",
                "paper-title": "Stochastic Inverse Problem: stability, regularization and Wasserstein gradient flow",
                "image-path": "flux_paper_image/2410.00229_1727989341.png"
            },

            {
                "startTime": "37:17",
                "arxivId": "2410.01591",
                "arxivLink": "https://arxiv.org/abs/2410.01591",
                "title": "CT Scans Get a Makeover: AI Foundation Model Makes Non-Ideal Images Ideal!",
                "institute": "Southeast University, Yale University, Case Western Reserve University",
                "text": "This research proposes a novel imaging foundation model, TAMP, for universal enhancement of non-ideal measurement computed tomography (NICT) images. Unlike previous specialized models that focus on specific NICT settings and body regions, TAMP is trained on a large-scale simulated dataset and can directly generalize to diverse NICT scenarios.",
                "paper-title": "Imaging foundation model for universal enhancement of non-ideal measurement CT",
                "image-path": "flux_paper_image/2410.01591_1727990205.png"
            },

            {
                "startTime": "37:46",
                "arxivId": "2410.01212",
                "arxivLink": "https://arxiv.org/abs/2410.01212",
                "title": "Safe RL Gets a High-Probability Guarantee: No More Safety Violations!",
                "institute": "CMU",
                "text": "This research proposes a new algorithm, ASCPO, that guarantees high-probability state-wise constraint satisfaction in reinforcement learning. Unlike previous methods that only consider expected constraint violations, ASCPO also accounts for the variance of violations, ensuring a much lower probability of safety breaches.",
                "paper-title": "Absolute State-wise Constrained Policy Optimization: High-Probability State-wise Constraints Satisfaction",
                "image-path": "flux_paper_image/2410.01212_1727988660.png"
            },

            {
                "startTime": "38:17",
                "arxivId": "2410.00292",
                "arxivLink": "https://arxiv.org/abs/2410.00292",
                "title": "AI Eye Doctor: LLMs Diagnose Ocular Surface Diseases with a Twist!",
                "institute": "UC Berkeley",
                "text": "This research introduces a multi-modal diagnostic pipeline (MDPipe) that uses large language models (LLMs) to diagnose ocular surface diseases. Unlike previous methods that rely on closed-set predictions, MDPipe leverages LLMs' ability to generate free-form answers with clinical reasoning.",
                "paper-title": "Insight: A Multi-Modal Diagnostic Pipeline using LLMs for Ocular Surface Disease Diagnosis",
                "image-path": "flux_paper_image/2410.00292_1727988044.png"
            },

            {
                "startTime": "38:43",
                "arxivId": "2410.00844",
                "arxivLink": "https://arxiv.org/abs/2410.00844",
                "title": "Unbalanced Dynamics: Learning How Things Grow and Die with DeepRUOT",
                "institute": "Peking University",
                "text": "This research introduces a new deep learning method called DeepRUOT for learning regularized unbalanced optimal transport (RUOT). Unlike previous methods, DeepRUOT can infer continuous unbalanced stochastic dynamics from observed snapshots without requiring prior knowledge of growth and death processes.",
                "paper-title": "Learning Stochastic Dynamics from Snapshots through Regularized Unbalanced Optimal Transport",
                "image-path": "flux_paper_image/2410.00844_1727989506.png"
            },

            {
                "startTime": "39:05",
                "arxivId": "2410.01162",
                "arxivLink": "https://arxiv.org/abs/2410.01162",
                "title": "Frozen AI Learns to Feel: LLMs Now Understand Your Tone!",
                "institute": "Massachusetts Institute of Technology, Meta",
                "text": "This research explores training a speech encoder to capture paralinguistic cues in speech, allowing a frozen LLM to understand emotions and speaking styles without fine-tuning. This differs from previous work that either focused on semantic information or required fine-tuning the LLM.",
                "paper-title": "Frozen Large Language Models Can Perceive Paralinguistic Aspects of Speech",
                "image-path": "flux_paper_image/2410.01162_1727989936.png"
            },

            {
                "startTime": "39:22",
                "arxivId": "2410.00946",
                "arxivLink": "https://arxiv.org/abs/2410.00946",
                "title": "Brain Graph Weights: Unmasking Hidden Sub-Cohorts in Neuroimaging!",
                "institute": "Stanford University",
                "text": "This research proposes a novel sample weighting scheme that leverages spectral graph theory to capture the interplay between predictive power and cohort-specific factors in neuroimaging-based predictive models. Unlike previous approaches that focus on reweighing challenging samples, this method aims to gain population-level insights into the intrinsic relationship between predictive power and auxiliary factors.",
                "paper-title": "Spectral Graph Sample Weighting for Interpretable Sub-cohort Analysis in Predictive Models for Neuroimaging",
                "image-path": "flux_paper_image/2410.00946_1727988600.png"
            },

            {
                "startTime": "39:42",
                "arxivId": "2410.01658",
                "arxivLink": "https://arxiv.org/abs/2410.01658",
                "title": "Outlier-Proofing Causal Inference: When Propensity Scores Go Wild!",
                "institute": "Yale University",
                "text": "This paper introduces a new family of estimators called Coarse IPW (CIPW) estimators that are robust to inaccuracies in propensity scores and outliers. Unlike existing IPW estimators, CIPW estimators achieve a smaller RMSE even when propensity scores are slightly inaccurate.",
                "paper-title": "Smaller Confidence Intervals From IPW Estimators via Data-Dependent Coarsening (Extended Abstract)",
                "image-path": "flux_paper_image/2410.01658_1727989672.png"
            },

            {
                "startTime": "40:12",
                "arxivId": "2410.01736",
                "arxivLink": "https://arxiv.org/abs/2410.01736",
                "title": "Dynamic Data, No Problem: A Recursive Approach to Retrieval",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research introduces two new algorithms, adRAP and postQFRAP, to improve retrieval performance in dynamic datasets. adRAP efficiently updates the hierarchical structure of retrieved text chunks as new documents are added or removed, while postQFRAP applies query-focused recursive abstractive processing as a post-retrieval layer, enhancing context quality.",
                "paper-title": "Recursive Abstractive Processing for Retrieval in Dynamic Datasets",
                "image-path": "flux_paper_image/2410.01736_1727989837.png"
            },

            {
                "startTime": "40:42",
                "arxivId": "2410.00903",
                "arxivLink": "https://arxiv.org/abs/2410.00903",
                "title": "AI-Powered Text Therapy: Curing Confounding Bias in Causal Inference",
                "institute": "Harvard University",
                "text": "This research proposes using generative AI models to create treatment texts and then leverage their internal representations for causal inference. This differs from previous work that relies on learning causal representations directly from the data.",
                "paper-title": "Causal Representation Learning with Generative Artificial Intelligence: Application to Texts as Treatments",
                "image-path": "flux_paper_image/2410.00903_1727990690.png"
            },

            {
                "startTime": "41:05",
                "arxivId": "2410.01690",
                "arxivLink": "https://arxiv.org/abs/2410.01690",
                "title": "VLMs: Seeing is Believing, But Context is King!",
                "institute": "ETH Zurich, German Cancer Research Center",
                "text": "This research focuses on the interplay between image and text modalities in Visual Language Models (VLMs) for visual question answering (VQA) tasks. Unlike previous work that often treats modalities as independent inputs, this study investigates how semantic interventions in both image and text affect VLM performance, uncertainty, and attention attribution.",
                "paper-title": "Why context matters in VQA and Reasoning: Semantic interventions for VLM input modalities",
                "image-path": "flux_paper_image/2410.01690_1727988473.png"
            },

            {
                "startTime": "41:34",
                "arxivId": "2410.00897",
                "arxivLink": "https://arxiv.org/abs/2410.00897",
                "title": "Health Data Privacy: Not Just Black and White, But a Colorful Gradient!",
                "institute": "Harvard University",
                "text": "This paper introduces a \"privacy gradient\" approach to health data management, moving beyond traditional binary models of complete privacy or full accessibility. It proposes a multidimensional concept that considers factors like data sensitivity, stakeholder relationships, purpose of use, and temporal aspects to determine appropriate privacy levels.",
                "paper-title": "The Gradient of Health Data Privacy",
                "image-path": "flux_paper_image/2410.00897_1727990232.png"
            },

            {
                "startTime": "41:55",
                "arxivId": "2410.00812",
                "arxivLink": "https://arxiv.org/abs/2410.00812",
                "title": "Brain-Decoding LLMs: Turning AI into a Language Whisperer",
                "institute": "University of Texas at Austin, Microsoft Research, University of California San Francisco...",
                "text": "This research introduces a generative framework called GEM-V, which translates the predictions of large language models (LLMs) into concise, human-understandable explanations of brain activity. This framework then uses these explanations to design new experiments that test the causal relationship between the explanations and brain responses. This approach differs from previous work by directly testing the causality of LLM-based encoding models, rather than simply relying on their predictive power.",
                "paper-title": "A generative framework to bridge data-driven models and scientific theories in language neuroscience",
                "image-path": "flux_paper_image/2410.00812_1727988962.png"
            },

            {
                "startTime": "42:25",
                "arxivId": "2410.01671",
                "arxivLink": "https://arxiv.org/abs/2410.01671",
                "title": "LLMs Get a Grammar Lesson: Coreference Resolution Makes Long Texts Easier to Understand",
                "institute": "Zhejiang University, MIT, Southeast University...",
                "text": "This research introduces the Long Question Coreference Adaptation (LQCA) method, which focuses on resolving coreference issues in long texts. Unlike previous work that primarily relies on prompt engineering or smaller models, LQCA utilizes a four-step process to systematically identify and manage references within long documents, ultimately improving the performance of LLMs in question answering tasks.",
                "paper-title": "Bridging Context Gaps: Leveraging Coreference Resolution for Long Contextual Understanding",
                "image-path": "flux_paper_image/2410.01671_1727990199.png"
            },

            {
                "startTime": "42:51",
                "arxivId": "2410.01739",
                "arxivLink": "https://arxiv.org/abs/2410.01739",
                "title": "Q-Learning Gets a Brain: New Algorithm Mimics Human Intuition",
                "institute": "Peking University",
                "text": "This research introduces Cognitive Belief-Driven Q-Learning (CBDQ), which integrates subjective belief modeling into the Q-learning framework. Unlike previous work that focuses on mathematical optimization, CBDQ draws inspiration from cognitive science to enhance decision-making accuracy by endowing agents with human-like learning and reasoning capabilities.",
                "paper-title": "Mimicking Human Intuition: Cognitive Belief-Driven Q-Learning",
                "image-path": "flux_paper_image/2410.01739_1727989269.png"
            },

            {
                "startTime": "43:25",
                "arxivId": "2410.01257",
                "arxivLink": "https://arxiv.org/abs/2410.01257",
                "title": "Reward Models: A Head-to-Head Showdown with a Twist!",
                "institute": "Nvidia",
                "text": "This research directly compares two popular reward model training paradigms, Bradley-Terry and Regression, using a newly released dataset with matched data. It also introduces a novel approach to combine these paradigms, achieving top performance on RewardBench.",
                "paper-title": "HelpSteer2-Preference: Complementing Ratings with Preferences",
                "image-path": "flux_paper_image/2410.01257_1727990162.png"
            },

            {
                "startTime": "43:48",
                "arxivId": "2410.01698",
                "arxivLink": "https://arxiv.org/abs/2410.01698",
                "title": "Satellite Images: Compressed with a Diffusion of Magic!",
                "institute": "Tsinghua University, Harbin Institute of Technology, Nanyang Technological University",
                "text": "This research proposes a novel image compression method for satellites that uses a lightweight encoder on the satellite and a diffusion-based model on the ground to compensate for the loss of information during compression. This approach differs from previous work by leveraging the multi-modal nature of satellite images, using sensor data as a condition for diffusion generation.",
                "paper-title": "COSMIC: Compress Satellite Images Efficiently via Diffusion Compensation",
                "image-path": "flux_paper_image/2410.01698_1727989277.png"
            },

            {
                "startTime": "44:13",
                "arxivId": "2410.00182",
                "arxivLink": "https://arxiv.org/abs/2410.00182",
                "title": "AI Detectives: Can LLMs Crack the Code of Crisis Tweets?",
                "institute": "Georgia State University, MIT",
                "text": "This research explores the zero-shot classification capabilities of large language models (LLMs) for analyzing crisis-related tweets, a task typically tackled by specialized machine learning models.",
                "paper-title": "Zero-Shot Classification of Crisis Tweets Using Instruction-Finetuned Large Language Models",
                "image-path": "flux_paper_image/2410.00182_1727989536.png"
            },

            {
                "startTime": "44:36",
                "arxivId": "2410.00345",
                "arxivLink": "https://arxiv.org/abs/2410.00345",
                "title": "Lost in the Sauce: A Taxonomy of Loss Functions for Stochastic Optimal Control",
                "institute": "Microsoft, Meta",
                "text": "This research introduces a taxonomy of loss functions for stochastic optimal control (SOC) problems, grouping them into classes based on their gradient expectation. This allows for a more systematic understanding of the strengths and weaknesses of different loss functions.",
                "paper-title": "A Taxonomy of Loss Functions for Stochastic Optimal Control",
                "image-path": "flux_paper_image/2410.00345_1727990134.png"
            },

            {
                "startTime": "44:56",
                "arxivId": "2410.01450",
                "arxivLink": "https://arxiv.org/abs/2410.01450",
                "title": "Mandarin Lyrics: AI Gets a Tune-Up with Multi-Agent Lyric Generation!",
                "institute": "National Tsing Hua University",
                "text": "This research extends previous work on English lyric generation to Mandarin, considering the unique challenges of tonal languages. It introduces a multi-agent system that decomposes the melody-to-lyric task into sub-tasks, each handled by a specialized agent.",
                "paper-title": "Agent-Driven Large Language Models for Mandarin Lyric Generation",
                "image-path": "flux_paper_image/2410.01450_1727990730.png"
            },

            {
                "startTime": "45:20",
                "arxivId": "2410.01707",
                "arxivLink": "https://arxiv.org/abs/2410.01707",
                "title": "MCTS Gets a Speed Boost: LLMs Reason Faster with Contrastive Decoding",
                "institute": "University of Sydney, Peking University, Tsinghua University",
                "text": "This research focuses on improving the efficiency and interpretability of Monte Carlo Tree Search (MCTS) for Large Language Models (LLMs) by introducing a novel contrastive decoding-based reward model and refining the backpropagation process. Unlike previous work that primarily treated MCTS as a tool, this paper delves into analyzing and improving its components.",
                "paper-title": "Interpretable Contrastive Monte Carlo Tree Search Reasoning",
                "image-path": "flux_paper_image/2410.01707_1727990669.png"
            },

            {
                "startTime": "45:42",
                "arxivId": "2410.01259",
                "arxivLink": "https://arxiv.org/abs/2410.01259",
                "title": "Overparameterized Models: Degrees of Freedom Get a Random Makeover!",
                "institute": "UC Berkeley, CMU",
                "text": "This research extends the classical concept of degrees of freedom to the setting of random-X prediction error, which is more relevant to modern machine learning problems. This is achieved by reinterpreting the classical definition and then translating it to the random-X setting.",
                "paper-title": "Revisiting Optimism and Model Complexity in the Wake of Overparameterized Machine Learning",
                "image-path": "flux_paper_image/2410.01259_1727990736.png"
            },

            {
                "startTime": "46:10",
                "arxivId": "2410.01565",
                "arxivLink": "https://arxiv.org/abs/2410.01565",
                "title": "Bayes' Got Your Back: How Neural Networks Learn to Generalize in Context",
                "institute": "University of Freiburg",
                "text": "This research proposes a new interpretation of neural network training in the context of in-context learning (ICL), viewing it as an approximation of the true posterior distribution rather than the traditional maximum likelihood estimation (MLE). This approach is particularly relevant in the era of large-scale single-epoch training, where datasets are vast and readily available.",
                "paper-title": "Bayes' Power for Explaining In-Context Learning Generalizations",
                "image-path": "flux_paper_image/2410.01565_1727989397.png"
            },

            {
                "startTime": "46:38",
                "arxivId": "2410.00944",
                "arxivLink": "https://arxiv.org/abs/2410.00944",
                "title": "Hypergraphing Parkinson's: A New Way to Map Motor Impairment",
                "institute": "Stanford University",
                "text": "This research uses a heterogeneous hypergraph to analyze multi-modal medical data, which allows for the capture of higher-order relationships between patients beyond simple pairwise connections. This approach is distinct from previous work that often focuses on single modalities or uses homogeneous graphs.",
                "paper-title": "GAMMA-PD: Graph-based Analysis of Multi-Modal Motor Impairment Assessments in Parkinson's Disease",
                "image-path": "flux_paper_image/2410.00944_1727988823.png"
            },

            {
                "startTime": "46:57",
                "arxivId": "2410.00132",
                "arxivLink": "https://arxiv.org/abs/2410.00132",
                "title": "Traffic Jam? No Problem! New AI Predicts Vehicle Locations and Speeds Using Partial Data.",
                "institute": "University of Hong Kong, Tsinghua University",
                "text": "This research proposes a novel deep learning network, CVVLSNet, to estimate vehicle locations and speeds using only partial connected vehicle (CV) trajectory data. Unlike previous methods that rely on full CV data or external sensors, CVVLSNet leverages the limited information available in a mixed traffic environment.",
                "paper-title": "CVVLSNet: Vehicle Location and Speed Estimation Using Partial Connected Vehicle Trajectory Data",
                "image-path": "flux_paper_image/2410.00132_1727989570.png"
            },

            {
                "startTime": "47:19",
                "arxivId": "2410.01482",
                "arxivLink": "https://arxiv.org/abs/2410.01482",
                "title": "Wavelet Magic: Unlocking the Secrets of AI's Black Box",
                "institute": "Paris Sciences et Lettres University, Harvard University, Sorbonne University",
                "text": "This research proposes a new method for explaining AI models called Wavelet Attribution Method (WAM). Unlike previous methods that focus on pixel-level explanations, WAM leverages the wavelet domain, which captures the structural components of the input data, providing a more comprehensive understanding of the model's decision-making process.",
                "paper-title": "One Wave to Explain Them All: A Unifying Perspective on Post-hoc Explainability",
                "image-path": "flux_paper_image/2410.01482_1727989255.png"
            },

            {
                "startTime": "47:53",
                "arxivId": "2410.01208",
                "arxivLink": "https://arxiv.org/abs/2410.01208",
                "title": "LLMs: String Theory for Dummies? New Research Uncovers Their String Processing Woes!",
                "institute": "Duke University, Microsoft",
                "text": "This research presents StringLLM, a method for constructing datasets to benchmark the string processing capabilities of LLMs. It differs from previous work by providing a comprehensive evaluation of LLMs across a wide range of string processing tasks and string types.",
                "paper-title": "StringLLM: Understanding the String Processing Capability of Large Language Models",
                "image-path": "flux_paper_image/2410.01208_1727989113.png"
            },

            {
                "startTime": "48:22",
                "arxivId": "2410.01535",
                "arxivLink": "https://arxiv.org/abs/2410.01535",
                "title": "Building Blocks for 3D Scenes: GaussianBlock Makes Editing a Breeze!",
                "institute": "Microsoft, Lancaster University",
                "text": "This paper proposes a novel method called GaussianBlock for 3D scene reconstruction that combines the advantages of both primitives and 3D Gaussians. Unlike previous methods that rely solely on one or the other, GaussianBlock utilizes a hybrid representation, enabling semantically coherent and disentangled representations for precise and physical editing.",
                "paper-title": "GaussianBlock: Building Part-Aware Compositional and Editable 3D Scene by Primitives and Gaussians",
                "image-path": "flux_paper_image/2410.01535_1727988557.png"
            },

            {
                "startTime": "48:44",
                "arxivId": "2410.00117",
                "arxivLink": "https://arxiv.org/abs/2410.00117",
                "title": "Robot Perception Gets a Certifiable Makeover: Burer-Monteiro Method to the Rescue!",
                "institute": "Massachusetts Institute of Technology, Northeastern University",
                "text": "This paper provides a consolidated overview of the Burer-Monteiro (BM) method, highlighting its application in certifiable robot perception. It emphasizes the importance of the linear independence constraint qualification (LICQ) for successful implementation, a concept not extensively covered in previous research.",
                "paper-title": "An Overview of the Burer-Monteiro Method for Certifiable Robot Perception",
                "image-path": "flux_paper_image/2410.00117_1727988707.png"
            },

            {
                "startTime": "49:08",
                "arxivId": "2410.00857",
                "arxivLink": "https://arxiv.org/abs/2410.00857",
                "title": "RAG's Shortcut: LLMs Take the Easy Way Out!",
                "institute": "Microsoft, University of Massachusetts Amherst, University of Maryland College Park",
                "text": "This research delves into the inner workings of Retrieval Augmented Generation (RAG) systems, specifically examining how language models (LLMs) prioritize information from retrieved context over their own internal knowledge. Unlike previous work that focused on the practical applications of RAG, this study uses mechanistic analysis to understand the model's decision-making process.",
                "paper-title": "Quantifying reliance on external information over parametric knowledge during Retrieval Augmented Generation (RAG) using mechanistic analysis",
                "image-path": "flux_paper_image/2410.00857_1727989162.png"
            },

            {
                "startTime": "49:28",
                "arxivId": "2410.01464",
                "arxivLink": "https://arxiv.org/abs/2410.01464",
                "title": "AI Makes Materials Science Move Faster: Flow Matching for Speedy Simulations!",
                "institute": "Massachusetts Institute of Technology",
                "text": "This research introduces LIFLOW, a generative framework that accelerates molecular dynamics (MD) simulations for crystalline materials by formulating the task as conditional generation of atomic displacements. Unlike previous methods that focus on biomolecules, LIFLOW accounts for symmetries and handles various atom types under different simulation conditions.",
                "paper-title": "Flow Matching for Accelerated Simulation of Atomic Transport in Materials",
                "image-path": "flux_paper_image/2410.01464_1727988492.png"
            },

            {
                "startTime": "49:52",
                "arxivId": "2410.00288",
                "arxivLink": "https://arxiv.org/abs/2410.00288",
                "title": "GARCH-Informed Neural Networks: Volatility Prediction Gets a Brain Boost!",
                "institute": "CMU, Pennsylvania State University, NYU",
                "text": "This research proposes a hybrid deep learning model called GARCH-Informed Neural Network (GINN) that combines the strengths of the GARCH model with the flexibility of an LSTM network. This approach aims to improve the accuracy and generalizability of volatility prediction by incorporating stylized facts and empirical market patterns captured by the GARCH model into the loss function of the LSTM network.",
                "paper-title": "GARCH-Informed Neural Networks for Volatility Prediction in Financial Markets",
                "image-path": "flux_paper_image/2410.00288_1727990330.png"
            },

            {
                "startTime": "50:25",
                "arxivId": "2410.00681",
                "arxivLink": "https://arxiv.org/abs/2410.00681",
                "title": "Arabic Sign Language Gets a Transformer Makeover: 99.6% Accuracy!",
                "institute": "Egypt-Japanese University of Science & Technology, Badya University",
                "text": "This research utilizes transfer learning and transformer-based models for Arabic Alphabet Sign Language recognition, which is a novel approach compared to previous studies that primarily relied on CNN architectures.",
                "paper-title": "Advanced Arabic Alphabet Sign Language Recognition Using Transfer Learning and Transformer Models",
                "image-path": "flux_paper_image/2410.00681_1727989576.png"
            },

            {
                "startTime": "50:49",
                "arxivId": "2410.01316",
                "arxivLink": "https://arxiv.org/abs/2410.01316",
                "title": "Kernel Sums: Slicing Through Complexity with QMC!",
                "institute": "University College London, Technical University of Berlin",
                "text": "This paper introduces a quasi-Monte Carlo (QMC) approach to slicing for fast kernel summation, improving upon existing methods like random Fourier features (RFF) and non-QMC slicing. The QMC approach leverages specific sequences of points on the sphere to achieve faster convergence rates.",
                "paper-title": "Fast Summation of Radial Kernels via QMC Slicing",
                "image-path": "flux_paper_image/2410.01316_1727989156.png"
            },

            {
                "startTime": "51:16",
                "arxivId": "2410.01281",
                "arxivLink": "https://arxiv.org/abs/2410.01281",
                "title": "Human Mobility: When Your GPS Knows You Better Than You Do!",
                "institute": "CMU",
                "text": "This research introduces UIFORMER, a model that incorporates both aleatoric and epistemic uncertainty into human mobility modeling and anomaly detection. Unlike previous work, UIFORMER leverages a dual Transformer architecture to capture complex spatiotemporal dependencies and uses uncertainty estimates to improve prediction accuracy and anomaly scoring.",
                "paper-title": "Uncertainty-aware Human Mobility Modeling and Anomaly Detection",
                "image-path": "flux_paper_image/2410.01281_1727989901.png"
            },

            {
                "startTime": "51:43",
                "arxivId": "2410.01035",
                "arxivLink": "https://arxiv.org/abs/2410.01035",
                "title": "LLMs: Don't Stop Me Now! Embedding-Based Scheduling for Faster Responses",
                "institute": "Harvard University, MIT",
                "text": "This research proposes a novel approach to scheduling LLM requests by using embeddings from the LLM's internal layers to predict output lengths, rather than relying solely on input prompts. This method is more accurate and efficient than previous approaches that used separate models for length prediction.",
                "paper-title": "Don't Stop Me Now: Embedding Based Scheduling for LLMs",
                "image-path": "flux_paper_image/2410.01035_1727990480.png"
            },

            {
                "startTime": "52:01",
                "arxivId": "2410.00274",
                "arxivLink": "https://arxiv.org/abs/2410.00274",
                "title": "AI Conjurers: Building Virtual Worlds with a Magic Wand (and Prompts)",
                "institute": "UC Santa Cruz, Stanford University, University of Texas at Austin...",
                "text": "This research introduces Social Conjurer, a framework for collaborative virtual world creation using AI. Unlike previous work that focused on single-user scene generation, Social Conjurer enables multiple users to build and modify virtual worlds in real-time through language-based prompts and sketches.",
                "paper-title": "Social Conjuring: Multi-User Runtime Collaboration with AI in Building Virtual 3D Worlds",
                "image-path": "flux_paper_image/2410.00274_1727988451.png"
            },

            {
                "startTime": "52:33",
                "arxivId": "2410.01443",
                "arxivLink": "https://arxiv.org/abs/2410.01443",
                "title": "Spine Surgery Gets a Makeover: No More Radiation, Just a 3D \"Mental Map\"",
                "institute": "University Hospital Balgrist, University of Zurich",
                "text": "This research introduces a novel approach for reconstructing 3D spine anatomy using RGB-D data, eliminating the need for radiation-based imaging techniques like CT scans. The method leverages a transformer network, SurgPointTransformer, to learn patterns between visible and hidden anatomical structures, effectively completing the shape of the spine from partial observations.",
                "paper-title": "SurgPointTransformer: Vertebrae Shape Completion with RGB-D Data",
                "image-path": "flux_paper_image/2410.01443_1727989450.png"
            },

            {
                "startTime": "52:55",
                "arxivId": "2410.00309",
                "arxivLink": "https://arxiv.org/abs/2410.00309",
                "title": "AI Makes Friends: New Dataset Helps Robots Understand Human Touch",
                "institute": "Stanford University, Snapchat",
                "text": "This research introduces a novel data generation method for human mesh estimation (HME) that leverages large vision language models (LVLMs) to automatically create paired pseudo-ground truth meshes for scenes with closely interacting individuals. This approach differs from previous work by using LVLMs to annotate contact maps, which guide test-time optimization to produce paired image and pseudo-ground truth meshes.",
                "paper-title": "Ask, Pose, Unite: Scaling Data Acquisition for Close Interactions with Vision Language Models",
                "image-path": "flux_paper_image/2410.00309_1727988391.png"
            },

            {
                "startTime": "53:19",
                "arxivId": "2410.01309",
                "arxivLink": "https://arxiv.org/abs/2410.01309",
                "title": "LLMs: Getting Free Bits Back From Rotational Symmetries",
                "institute": "University of Cambridge",
                "text": "This paper proposes a new method for compressing Large Language Models (LLMs) by leveraging rotational symmetries in the weights of Transformer blocks pruned by SliceGPT. This approach differs from previous compression techniques by explicitly accounting for these symmetries, leading to a more efficient encoding of the model weights.",
                "paper-title": "Getting Free Bits Back from Rotational Symmetries in LLMs",
                "image-path": "flux_paper_image/2410.01309_1727988110.png"
            },

            {
                "startTime": "53:37",
                "arxivId": "2410.01598",
                "arxivLink": "https://arxiv.org/abs/2410.01598",
                "title": "Travel Recommender Systems Get a Brain Boost: LLMs Help Find the Perfect Trip!",
                "institute": "University of Toronto",
                "text": "This research introduces a new query reformulation method called Elaborative Subtopic Query Reformulation (EQR) that uses large language models (LLMs) to generate multiple subtopics with detailed elaborations for broad and indirect travel queries. Unlike previous methods that focus on either expanding the breadth or depth of queries, EQR combines both aspects, leading to more effective retrieval of relevant travel destinations.",
                "paper-title": "Elaborative Subtopic Query Reformulation for Broad and Indirect Queries in Travel Destination Recommendation",
                "image-path": "flux_paper_image/2410.01598_1727990361.png"
            },

            {
                "startTime": "54:13",
                "arxivId": "2410.01665",
                "arxivLink": "https://arxiv.org/abs/2410.01665",
                "title": "Cardiac MRI Gets a Vision Makeover: 36 Million Images, One Super Model!",
                "institute": "Siemens Healthineers, Technical University of Munich, Imperial College London",
                "text": "This research introduces a vision foundation model specifically trained on 36 million cardiac MRI images, a significant departure from previous work that often focused on smaller datasets or individual tasks.",
                "paper-title": "Towards a vision foundation model for comprehensive assessment of Cardiac MRI",
                "image-path": "flux_paper_image/2410.01665_1727987963.png"
            },

            {
                "startTime": "54:31",
                "arxivId": "2410.01340",
                "arxivLink": "https://arxiv.org/abs/2410.01340",
                "title": "Neural Networks Learn Physics: Predicting Vibrations with a Twist!",
                "institute": "ETH Zurich",
                "text": "This research uses Physics-Informed Neural Networks (PINNs) to estimate the response and parameters of dynamical systems, incorporating known physical laws directly into the neural network's loss function. This approach differs from previous work by embedding physics knowledge into the learning process, leading to more interpretable models.",
                "paper-title": "Response Estimation and System Identification of Dynamical Systems via Physics-Informed Neural Networks",
                "image-path": "flux_paper_image/2410.01340_1727988233.png"
            },

            {
                "startTime": "54:54",
                "arxivId": "2410.01072",
                "arxivLink": "https://arxiv.org/abs/2410.01072",
                "title": "Virtual Staining: From Patchy to Perfect, a Whole Slide Image Revolution!",
                "institute": "University of Washington, UC Los Angeles, University of Pennsylvania",
                "text": "This research introduces CC-WSI-Net, a framework that extends existing GAN models to generate seamless virtual whole slide images (WSIs) by integrating content and color consistency modules. Unlike previous methods that often suffer from inconsistencies at tile boundaries, CC-WSI-Net ensures a smooth and accurate representation of the entire slide.",
                "paper-title": "Generating Seamless Virtual Immunohistochemical Whole Slide Images with Content and Color Consistency",
                "image-path": "flux_paper_image/2410.01072_1727990610.png"
            },

            {
                "startTime": "55:20",
                "arxivId": "2410.00404",
                "arxivLink": "https://arxiv.org/abs/2410.00404",
                "title": "Sparse Views, Big Results: Reconstructing Coronary Arteries with 3D Gaussians",
                "institute": "University of Science and Technology of China, Suzhou Institute for Advance Research, Key Laboratory of Precision and Intelligent Chemistry...",
                "text": "This research introduces a novel 3D Gaussian Representation (3DGR) scheme for coronary artery reconstruction from ultra-sparse 2D X-ray projections. Unlike previous methods that rely on dense view data or struggle with sparse data, 3DGR-CAR leverages the efficiency of 3D Gaussian representation and a Gaussian center predictor to achieve accurate reconstruction with only two views.",
                "paper-title": "3DGR-CAR: Coronary artery reconstruction from ultra-sparse 2D X-ray views with a 3D Gaussians representation",
                "image-path": "flux_paper_image/2410.00404_1727990646.png"
            },

            {
                "startTime": "55:44",
                "arxivId": "2410.00036",
                "arxivLink": "https://arxiv.org/abs/2410.00036",
                "title": "AI-Powered Interview Assistant: Say Goodbye to Post-Interview Blues!",
                "institute": "University of Washington",
                "text": "This research introduces InsightPulse, an IoT-based system that combines hardware and software to enhance the UX interview process. Unlike previous work that focuses solely on software solutions, InsightPulse provides real-time support during interviews through speech analysis and AI-generated summaries and follow-up questions.",
                "paper-title": "InsightPulse: An IoT-based System for User Experience Interview Analysis",
                "image-path": "flux_paper_image/2410.00036_1727989415.png"
            },

            {
                "startTime": "56:07",
                "arxivId": "2410.00916",
                "arxivLink": "https://arxiv.org/abs/2410.00916",
                "title": "IBM's Quantum Computer: From 5 Qubits to 1,000+ and Counting!",
                "institute": "Ain Shams University, Zewail City of Science Technology and Innovation",
                "text": "This research focuses on the evolution of IBM Quantum's hardware, detailing the progression of their processors from the 5-qubit Canary to the 1,121-qubit Condor. It also highlights the shift in IBM's strategy from prioritizing qubit count to focusing on enhanced error resistance.",
                "paper-title": "IBM Quantum Computers: Evolution, Performance, and Future Directions",
                "image-path": "flux_paper_image/2410.00916_1727987918.png"
            },

            {
                "startTime": "56:27",
                "arxivId": "2410.00145",
                "arxivLink": "https://arxiv.org/abs/2410.00145",
                "title": "Neural Networks Need a Safety Net: New Algorithm Keeps Robots in Line!",
                "institute": "MIT",
                "text": "This research introduces Constraint-Aware Refinement for Verification (CARV), a new algorithm that uses safety constraints to refine reachable set over-approximations (RSOAs) only when necessary. This approach differs from previous methods by explicitly incorporating safety constraints into the refinement process.",
                "paper-title": "Constraint-Aware Refinement for Safety Verification of Neural Feedback Loops",
                "image-path": "flux_paper_image/2410.00145_1727990720.png"
            },

            {
                "startTime": "56:55",
                "arxivId": "2410.01669",
                "arxivLink": "https://arxiv.org/abs/2410.01669",
                "title": "Covariance Networks Go on a Diet: Sparsity Makes Them Smarter and Faster",
                "institute": "Delft University of Technology, University of Cambridge",
                "text": "This research introduces Sparse Covariance Neural Networks (S-VNNs), which apply sparsification techniques to the sample covariance matrix before convolution. This differs from previous work by addressing the limitations of traditional VNNs, which are sensitive to noisy covariance estimates and computationally expensive.",
                "paper-title": "Sparse Covariance Neural Networks",
                "image-path": "flux_paper_image/2410.01669_1727989091.png"
            },

            {
                "startTime": "57:18",
                "arxivId": "2410.01061",
                "arxivLink": "https://arxiv.org/abs/2410.01061",
                "title": "Deep-Sea Detectives: AI Uncovers Buried Barrels with 3D Vision!",
                "institute": "Scripps Institution of Oceanography, UCSD",
                "text": "This research introduces BarrelNet, a modified PointNet architecture, trained on synthetic data to estimate the pose and burial fraction of barrels from point clouds. This approach differs from previous work by specifically addressing the challenges of underwater imagery and partial visibility of objects.",
                "paper-title": "Pose Estimation of Buried Deep-Sea Objects using 3D Vision Deep Learning Models",
                "image-path": "flux_paper_image/2410.01061_1727990193.png"
            },

            {
                "startTime": "57:43",
                "arxivId": "2410.01322",
                "arxivLink": "https://arxiv.org/abs/2410.01322",
                "title": "Out-of-Distribution Data? FORTE Knows How to Spot the Imposters!",
                "institute": "Case Western Reserve University, Google",
                "text": "This research proposes a new framework called FORTE that uses multiple representation learning techniques and non-parametric density estimators to detect out-of-distribution (OOD) data and synthetic images. Unlike previous methods that rely solely on likelihood-based generative models, FORTE leverages a combination of diverse feature extraction techniques and anomaly detection algorithms to improve robustness and accuracy.",
                "paper-title": "Forte : Finding Outliers with Representation Typicality Estimation",
                "image-path": "flux_paper_image/2410.01322_1727989820.png"
            },

            {
                "startTime": "58:11",
                "arxivId": "2410.00509",
                "arxivLink": "https://arxiv.org/abs/2410.00509",
                "title": "Bias Busters: Unmasking the Hidden Influences in Personalized Medicine",
                "institute": "ETH Zurich, University of Zurich",
                "text": "This research delves into the impact of different types of treatment assignment biases on counterfactual prediction and biomarker identification in precision medicine. Unlike previous work that often focuses on fixed treatment policies, this study models various characteristics of the underlying observational treatment policy in distinct clinical settings.",
                "paper-title": "Learning Personalized Treatment Decisions in Precision Medicine: Disentangling Treatment Assignment Bias in Counterfactual Outcome Prediction and Biomarker Identification",
                "image-path": "flux_paper_image/2410.00509_1727988298.png"
            },

            {
                "startTime": "58:28",
                "arxivId": "2410.00948",
                "arxivLink": "https://arxiv.org/abs/2410.00948",
                "title": "Shrinking Deep Learning Brains for Real-Time Fluorescence Imaging: A Tiny Model with Big Impact!",
                "institute": "Rensselaer, IBM",
                "text": "This research focuses on compressing recurrent neural networks (RNNs) for real-time fluorescence lifetime imaging (FLI) on resource-constrained FPGA boards. The authors explore various compression techniques, including weight reduction, knowledge distillation (KD), post-training quantization (PTQ), and quantization-aware training (QAT), to reduce model size and computational load while preserving inference accuracy.",
                "paper-title": "Compressing Recurrent Neural Networks for FPGA-accelerated Implementation in Fluorescence Lifetime Imaging",
                "image-path": "flux_paper_image/2410.00948_1727990568.png"
            },

            {
                "startTime": "58:53",
                "arxivId": "2410.00035",
                "arxivLink": "https://arxiv.org/abs/2410.00035",
                "title": "Uzbek Speech Gets a Makeover: New Corpus Bridges Cyrillic and Latin Gaps",
                "institute": "Redmond High School, University of Washington",
                "text": "This research introduces FeruzaSpeech, a new speech corpus for the Uzbek language that includes transcripts in both Cyrillic and Latin alphabets. This is unique because previous Uzbek speech corpuses have only used one alphabet, making it difficult to train models that can handle both.",
                "paper-title": "FeruzaSpeech: A 60 Hour Uzbek Read Speech Corpus with Punctuation, Casing, and Context",
                "image-path": "flux_paper_image/2410.00035_1727989308.png"
            },

            {
                "startTime": "59:13",
                "arxivId": "2410.00544",
                "arxivLink": "https://arxiv.org/abs/2410.00544",
                "title": "MFBO: The Secret Weapon for Speeding Up Materials Discovery",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research provides a systematic evaluation of multi-fidelity Bayesian optimization (MFBO) methods, offering guidelines and recommendations for its application in materials and molecular research. It differs from previous work by focusing on the impact of low-fidelity source cost and informativeness on MFBO performance.",
                "paper-title": "Best Practices for Multi-Fidelity Bayesian Optimization in Materials and Molecular Research",
                "image-path": "flux_paper_image/2410.00544_1727990489.png"
            },

            {
                "startTime": "59:44",
                "arxivId": "2410.01628",
                "arxivLink": "https://arxiv.org/abs/2410.01628",
                "title": "Predicting the Future of Self-Driving Cars: Unveiling the Secrets of Uncertainty!",
                "institute": "Bosch Center for Artificial Intelligence, University of Freiburg",
                "text": "This research introduces a novel method for quantifying and decomposing uncertainty in trajectory prediction models for autonomous driving. Unlike previous work, it utilizes an information-theoretic approach to measure aleatoric and epistemic uncertainty, allowing for a more nuanced understanding of the sources of uncertainty in predictions.",
                "paper-title": "Entropy-Based Uncertainty Modeling for Trajectory Prediction in Autonomous Driving",
                "image-path": "flux_paper_image/2410.01628_1727990751.png"
            }
    ],
    "stats": {
        "num_pick": 152,
        "num_total": 632,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202410031450_audio.mp3"
}