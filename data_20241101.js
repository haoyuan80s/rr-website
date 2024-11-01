
daily_data = {
    "date": "2024-11-01",
    "tweets": [
        
        {
            "startTime": "00:54",
            "arxivId": "2410.23676",
            "arxivLink": "https://arxiv.org/abs/2410.23676",
            "title": "LLMs: Not Just Chatbots, They're Data Whisperers Now!",
            "institute": "Google DeepMind",
            "text": "This paper proposes a novel method for curating large-scale datasets for web-scale visual entity recognition by leveraging multimodal LLMs for label verification, metadata generation, and rationale explanation. Unlike previous work that directly uses LLMs for annotation, this approach prompts the LLM to reason about potential candidate entities by accessing additional contextual information, resulting in more accurate annotations.",
            "paper-title": "Web-Scale Visual Entity Recognition: An LLM-Driven Data Approach",
            "image-path": "flux_paper_image/2410.23676_1730490674.png"
        },

        {
            "startTime": "01:16",
            "arxivId": "2410.24222",
            "arxivLink": "https://arxiv.org/abs/2410.24222",
            "title": "Outlier-Busting GPs: A Concave Approach to Robust Regression",
            "institute": "Meta",
            "text": "This paper proposes a novel Gaussian Process (GP) model that achieves robustness against sparse outliers by inferring data-point-specific noise levels with a sequential selection procedure. This approach differs from previous work by introducing a parameterization that makes the model's marginal log-likelihood strongly concave, leading to provable approximation guarantees for the proposed algorithm.",
            "paper-title": "Robust Gaussian Processes via Relevance Pursuit",
            "image-path": "flux_paper_image/2410.24222_1730491517.png"
        },

        {
            "startTime": "01:36",
            "arxivId": "2410.24114",
            "arxivLink": "https://arxiv.org/abs/2410.24114",
            "title": "Stop the Hubs! New Trick Makes Image-Text Retrieval Smarter",
            "institute": "MIT, Stanford University",
            "text": "This paper introduces Nearest Neighbor Normalization (NNN), a training-free method for improving contrastive image-text retrieval models. Unlike previous methods that require extensive computations or additional training, NNN uses a reference database of queries to estimate bias scores for each retrieval candidate, correcting for errors in the model's predictions.",
            "paper-title": "Nearest Neighbor Normalization Improves Multimodal Retrieval",
            "image-path": "flux_paper_image/2410.24114_1730490873.png"
        },

        {
            "startTime": "01:59",
            "arxivId": "2410.23405",
            "arxivLink": "https://arxiv.org/abs/2410.23405",
            "title": "LLM + Flow Matching = Material Magic: A New Recipe for Stable Crystals",
            "institute": "Meta, University of Amsterdam",
            "text": "This paper introduces FlowLLM, a hybrid model that combines large language models (LLMs) with Riemannian flow matching (RFM) to generate novel crystalline materials. Unlike previous approaches that rely solely on LLMs or denoising models, FlowLLM leverages the strengths of both paradigms, resulting in a significant improvement in the generation rate of stable and unique materials.",
            "paper-title": "FlowLLM: Flow Matching for Material Generation with Large Language Models as Base Distributions",
            "image-path": "flux_paper_image/2410.23405_1730491487.png"
        },

        {
            "startTime": "02:20",
            "arxivId": "2410.23940",
            "arxivLink": "https://arxiv.org/abs/2410.23940",
            "title": "Quantum Deep Equilibrium Models: Infinitely Deep, Yet Surprisingly Shallow!",
            "institute": "University of Toronto",
            "text": "This paper introduces Quantum Deep Equilibrium Models (QDEQs), a new training paradigm for quantum machine learning models. Unlike traditional variational quantum algorithms (VQAs), QDEQs mimic infinitely deep, weight-tied networks using a root solver to find fixed points, allowing for shallower circuits with fewer parameters.",
            "paper-title": "Quantum Deep Equilibrium Models",
            "image-path": "flux_paper_image/2410.23940_1730490601.png"
        },

        {
            "startTime": "02:50",
            "arxivId": "2410.23610",
            "arxivLink": "https://arxiv.org/abs/2410.23610",
            "title": "Transformers: From Chaos to Convergence, One Gradient Flow at a Time!",
            "institute": "Princeton University, University of Hong Kong, Northwestern University",
            "text": "This paper analyzes the convergence properties of gradient flow in training large-scale Transformers with weight decay regularization. It introduces novel mean-field techniques that adapt to Transformers, relaxing assumptions of homogeneity and global Lipschitz smoothness commonly used in previous studies of deep networks.",
            "paper-title": "Global Convergence in Training Large-Scale Transformers",
            "image-path": "flux_paper_image/2410.23610_1730489030.png"
        },

        {
            "startTime": "03:09",
            "arxivId": "2410.23970",
            "arxivLink": "https://arxiv.org/abs/2410.23970",
            "title": "Training Vision Models Like Language Models: TrAct Makes First-Layer Embeddings Trainable!",
            "institute": "Stanford University",
            "text": "This research proposes a novel training technique called TrAct that modifies the gradient computation for the first layer of vision models, effectively mimicking the training behavior of embedding layers in language models. This approach directly addresses the issue of weight updates being proportional to input magnitudes, unlike previous methods that focused on input modifications or architectural changes.",
            "paper-title": "TrAct: Making First-layer Pre-Activations Trainable",
            "image-path": "flux_paper_image/2410.23970_1730491181.png"
        },

        {
            "startTime": "03:30",
            "arxivId": "2410.24185",
            "arxivLink": "https://arxiv.org/abs/2410.24185",
            "title": "Robot Hands Get a Data Boost: DexMimicGen Makes Bimanual Learning a Breeze!",
            "institute": "NVIDIA Research, UT Austin, UC San Diego",
            "text": "This research introduces DexMimicGen, a system that automatically generates large datasets for training bimanual dexterous robots. Unlike previous work that relied heavily on human demonstrations, DexMimicGen leverages a small set of human demonstrations and transforms them into a vast amount of training data through simulation.",
            "paper-title": "DexMimicGen: Automated Data Generation for Bimanual Dexterous Manipulation via Imitation Learning",
            "image-path": "flux_paper_image/2410.24185_1730489007.png"
        },

        {
            "startTime": "03:49",
            "arxivId": "2410.23922",
            "arxivLink": "https://arxiv.org/abs/2410.23922",
            "title": "Warmup's Not So Hot: New Tricks to Train GPTs Without the Fuss",
            "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
            "text": "This paper explores the reasons behind the need for learning rate warmup in GPT training, focusing on the impact of update size on the internal representations of the network. It proposes modifications to the optimizer that aim to reduce or eliminate the need for warmup by controlling the update size in different ways.",
            "paper-title": "Analyzing&Reducing the Need for Learning Rate Warmup in GPT Training",
            "image-path": "flux_paper_image/2410.23922_1730489832.png"
        },

        {
            "startTime": "04:11",
            "arxivId": "2410.23463",
            "arxivLink": "https://arxiv.org/abs/2410.23463",
            "title": "LLMs Get a Multi-Document Makeover: Synthetic Instructions to the Rescue!",
            "institute": "Yale University",
            "text": "This research introduces MDCure, a pipeline that generates synthetic instructions for fine-tuning LLMs to improve their multi-document processing capabilities. Unlike previous work that relies on pre-training or human-annotated data, MDCure leverages powerful LLMs to create and filter high-quality instructions from sets of related documents.",
            "paper-title": "MDCure: A Scalable Pipeline for Multi-Document Instruction-Following",
            "image-path": "flux_paper_image/2410.23463_1730490045.png"
        },

        {
            "startTime": "04:32",
            "arxivId": "2410.23478",
            "arxivLink": "https://arxiv.org/abs/2410.23478",
            "title": "Collage: Building a PDF Playground for Information Extraction",
            "institute": "CMU",
            "text": "This research introduces Collage, a tool that allows users to rapidly prototype and evaluate different information extraction models on scientific PDFs. Unlike previous work, Collage focuses on providing a visual interface for inspecting the intermediate stages of processing, making it easier to debug and understand model failures.",
            "paper-title": "Collage: Decomposable Rapid Prototyping for Information Extraction on Scientific PDFs",
            "image-path": "flux_paper_image/2410.23478_1730491073.png"
        },

        {
            "startTime": "04:51",
            "arxivId": "2410.24207",
            "arxivLink": "https://arxiv.org/abs/2410.24207",
            "title": "No Pose, No Problem: 3D Scene Reconstruction Without the Drama!",
            "institute": "ETH Zurich, NVIDIA, Microsoft...",
            "text": "This research introduces a novel approach to 3D scene reconstruction that eliminates the need for accurate camera poses, a common requirement in previous methods. Instead of relying on pose estimation, the model directly predicts 3D Gaussians in a canonical space, enabling reconstruction from sparse, unposed images.",
            "paper-title": "No Pose, No Problem: Surprisingly Simple 3D Gaussian Splats from Sparse Unposed Images",
            "image-path": "flux_paper_image/2410.24207_1730490646.png"
        },

        {
            "startTime": "05:16",
            "arxivId": "2410.23850",
            "arxivLink": "https://arxiv.org/abs/2410.23850",
            "title": "Fact-Checking Bots: Can They Tell Truth From Fiction?",
            "institute": "Queen Mary University of London, University of Cambridge, Amazon UK...",
            "text": "This research introduces the AVERITEC shared task, which focuses on evaluating automated fact-checking systems using real-world claims and evidence retrieved from the web. Unlike previous datasets, AVERITEC emphasizes the retrieval of evidence through question generation and answering, providing a more structured representation of the evidential reasoning process.",
            "paper-title": "The Automated Verification of Textual Claims (AVeriTeC) Shared Task",
            "image-path": "flux_paper_image/2410.23850_1730490095.png"
        },

        {
            "startTime": "05:45",
            "arxivId": "2410.24177",
            "arxivLink": "https://arxiv.org/abs/2410.24177",
            "title": "Speech Tokenizer: A New Way to Make Your AI Speak Like a Human!",
            "institute": "MIT, Meta",
            "text": "This research proposes a new speech tokenizer called DC-Spin, which uses two codebooks to extract speaker-invariant speech tokens. This approach differs from previous work by using an auxiliary codebook to enhance the quality of the primary codebook, resulting in more accurate and robust speech tokens.",
            "paper-title": "DC-Spin: A Speaker-invariant Speech Tokenizer for Spoken Language Models",
            "image-path": "flux_paper_image/2410.24177_1730490798.png"
        },

        {
            "startTime": "06:16",
            "arxivId": "2410.24059",
            "arxivLink": "https://arxiv.org/abs/2410.24059",
            "title": "Unmasking Hidden Shifts: New Trick to Spot Changes in Latent Causal Models",
            "institute": "University of Texas at Austin, CMU",
            "text": "This research focuses on identifying changes in latent causal models, specifically the nodes that have shifted between different environments, without needing to fully recover the entire causal graph. This differs from previous work in causal representation learning, which typically aims to recover the entire causal graph.",
            "paper-title": "Identifying General Mechanism Shifts in Linear Causal Representations",
            "image-path": "flux_paper_image/2410.24059_1730491303.png"
        },

        {
            "startTime": "06:46",
            "arxivId": "2410.24024",
            "arxivLink": "https://arxiv.org/abs/2410.24024",
            "title": "Android Agents Get a Training Ground: New Benchmark Makes Mobile AI Smarter!",
            "institute": "Tsinghua University",
            "text": "This research introduces ANDROIDLAB, a framework for training and evaluating Android agents. Unlike previous benchmarks that often relied on static environments or lacked systematic evaluation, ANDROIDLAB provides a reproducible and challenging benchmark with 138 tasks across nine apps. It also includes a new dataset, Android Instruct, for fine-tuning open-source models.",
            "paper-title": "AndroidLab: Training and Systematic Benchmarking of Android Autonomous Agents",
            "image-path": "flux_paper_image/2410.24024_1730490070.png"
        },

        {
            "startTime": "07:08",
            "arxivId": "2410.23506",
            "arxivLink": "https://arxiv.org/abs/2410.23506",
            "title": "Transformers with Two Brains: Learning to Achieve Goals with Belief State Transformers",
            "institute": "University of Pennsylvania, UT Austin, University of Alberta...",
            "text": "This paper introduces the Belief State Transformer, a novel architecture that uses both forward and backward encoders to predict the next and previous tokens in a sequence. This differs from traditional transformers, which only use forward encoders.",
            "paper-title": "Learning to Achieve Goals with Belief State Transformers",
            "image-path": "flux_paper_image/2410.23506_1730491469.png"
        },

        {
            "startTime": "07:41",
            "arxivId": "2410.23326",
            "arxivLink": "https://arxiv.org/abs/2410.23326",
            "title": "Mass Spec Gym: Where Molecules Get Pumped and Annotated!",
            "institute": "Czech Academy of Sciences, Czech Technical University, Wageningen University & Research...",
            "text": "This research introduces MassSpecGym, a comprehensive benchmark for molecule discovery and identification from tandem mass spectrometry data. Unlike previous work, it provides a standardized dataset with a large collection of high-quality labeled MS/MS spectra and a new data splitting procedure that minimizes data leakage.",
            "paper-title": "MassSpecGym: A benchmark for the discovery and identification of molecules",
            "image-path": "flux_paper_image/2410.23326_1730489238.png"
        },

        {
            "startTime": "08:02",
            "arxivId": "2410.23880",
            "arxivLink": "https://arxiv.org/abs/2410.23880",
            "title": "Explaining AI: Stop Guessing, Start Optimizing!",
            "institute": "Harvard University",
            "text": "This research proposes a new method for directly optimizing explanations for desired properties, unlike previous methods that only encourage these properties.",
            "paper-title": "Directly Optimizing Explanations for Desired Properties",
            "image-path": "flux_paper_image/2410.23880_1730490731.png"
        },

        {
            "startTime": "08:19",
            "arxivId": "2410.24223",
            "arxivLink": "https://arxiv.org/abs/2410.24223",
            "title": "URAvatar: Turning Your Phone Selfie into a Relightable 3D Head!",
            "institute": "Meta",
            "text": "This research introduces a new approach to creating relightable avatars from a single phone scan. Unlike previous methods that rely on parametric reflectance models, this approach directly learns a radiance transfer function that incorporates global light transport, enabling real-time rendering under diverse environments.",
            "paper-title": "URAvatar: Universal Relightable Gaussian Codec Avatars",
            "image-path": "flux_paper_image/2410.24223_1730490487.png"
        },

        {
            "startTime": "08:38",
            "arxivId": "2410.23332",
            "arxivLink": "https://arxiv.org/abs/2410.23332",
            "title": "Text-to-Image Diffusion Gets a Human Touch: MoLE Makes Faces and Hands Look Real!",
            "institute": "Peking University, Johns Hopkins University, UC Berkeley",
            "text": "This research introduces a novel method called Mixture of Low-rank Experts (MoLE) to improve human-centric text-to-image generation. Unlike previous approaches that focus on overall image quality, MoLE specifically addresses the challenges of generating realistic faces and hands by training specialized low-rank modules on close-up datasets.",
            "paper-title": "MoLE: Enhancing Human-centric Text-to-image Diffusion via Mixture of Low-rank Experts",
            "image-path": "flux_paper_image/2410.23332_1730490479.png"
        },

        {
            "startTime": "09:02",
            "arxivId": "2410.24206",
            "arxivLink": "https://arxiv.org/abs/2410.24206",
            "title": "Deep Learning's Secret Weapon: How Optimizers Dance on the Edge of Stability",
            "institute": "Flatiron Institute, Princeton University",
            "text": "This research introduces the concept of \"central flows,\" which are differential equations that model the time-averaged trajectory of deep learning optimizers. This approach differs from previous work by explicitly capturing the optimizer's behavior, even in the complex \"edge of stability\" regime where oscillations dominate.",
            "paper-title": "Understanding Optimization in Deep Learning with Central Flows",
            "image-path": "flux_paper_image/2410.24206_1730490637.png"
        },

        {
            "startTime": "09:26",
            "arxivId": "2410.24220",
            "arxivLink": "https://arxiv.org/abs/2410.24220",
            "title": "Bridging Geometric States: A Diffusion Bridge to the Future!",
            "institute": "Peking University, Microsoft",
            "text": "This research introduces a novel framework called Geometric Diffusion Bridge (GDB) that accurately predicts the evolution of geometric states in complex systems. Unlike previous approaches that focus on single-step predictions or rely on intermediate labels, GDB models the joint distribution of geometric states across different time steps, enabling more precise and comprehensive predictions.",
            "paper-title": "Bridging Geometric States via Geometric Diffusion Bridge",
            "image-path": "flux_paper_image/2410.24220_1730489660.png"
        },

        {
            "startTime": "09:48",
            "arxivId": "2410.23771",
            "arxivLink": "https://arxiv.org/abs/2410.23771",
            "title": "Perplexity's Got a Problem: LLMs Need a New Way to Measure Long-Context Smarts",
            "institute": "Peking University",
            "text": "This research identifies a key flaw in how perplexity, a standard metric for evaluating language models, assesses long-context capabilities. The authors propose a new metric, LongPPL, which focuses on key tokens that are crucial for understanding long texts.",
            "paper-title": "What is Wrong with Perplexity for Long-context Language Modeling?",
            "image-path": "flux_paper_image/2410.23771_1730490384.png"
        },

        {
            "startTime": "10:14",
            "arxivId": "2410.23618",
            "arxivLink": "https://arxiv.org/abs/2410.23618",
            "title": "Quantum States: Learning the Secrets of Shallow Circuits",
            "institute": "UC Berkeley",
            "text": "This paper introduces a new technique for learning quantum states prepared by shallow circuits. Unlike previous work that relied on solving consistency problems, this approach avoids such issues by efficiently reconstructing the global state from its local reduced density matrices.",
            "paper-title": "Learning quantum states prepared by shallow circuits in polynomial time",
            "image-path": "flux_paper_image/2410.23618_1730489825.png"
        },

        {
            "startTime": "10:38",
            "arxivId": "2410.24213",
            "arxivLink": "https://arxiv.org/abs/2410.24213",
            "title": "Video Without Videos: Learning Representations from Scratch!",
            "institute": "ShanghaiTech University, Meta AI, University of California Berkeley",
            "text": "This research explores the possibility of learning video representations without using actual videos in the training process. Instead, the authors propose a progression of synthetic video datasets, starting with simple shapes and gradually introducing more complex properties like motion, acceleration, and textures. This approach allows for a more controlled and transparent alternative to traditional video data curation.",
            "paper-title": "Learning Video Representations without Natural Videos",
            "image-path": "flux_paper_image/2410.24213_1730489722.png"
        },

        {
            "startTime": "11:05",
            "arxivId": "2410.24091",
            "arxivLink": "https://arxiv.org/abs/2410.24091",
            "title": "Robots Get a Sixth Sense: 3D-ViTac Makes Machines Feel the World!",
            "institute": "Columbia University, University of Illinois Urbana-Champaign, University of Washington",
            "text": "This research introduces 3D-ViTac, a system that combines visual and tactile data into a unified 3D representation for robotic manipulation. This differs from previous work that either used low-resolution tactile sensors or processed visual and tactile data separately.",
            "paper-title": "3D-ViTac: Learning Fine-Grained Manipulation with Visuo-Tactile Sensing",
            "image-path": "flux_paper_image/2410.24091_1730489296.png"
        },

        {
            "startTime": "11:34",
            "arxivId": "2410.23969",
            "arxivLink": "https://arxiv.org/abs/2410.23969",
            "title": "Can a Quantum Computer Outsmart a Supercomputer? Interactive Proofs for Learning and Testing!",
            "institute": "University of Warwick, IBM",
            "text": "This research explores the potential of interactive proofs for verifying learning and testing tasks, particularly in scenarios where a resource-constrained verifier (like a quantum computer with limited memory) can leverage a resource-unconstrained prover (like a powerful classical computer). The paper investigates the limitations of such interactions when communication is classical and demonstrates that quantum communication can unlock significant advantages.",
            "paper-title": "Interactive proofs for verifying (quantum) learning and testing",
            "image-path": "flux_paper_image/2410.23969_1730491563.png"
        },

        {
            "startTime": "12:03",
            "arxivId": "2410.24204",
            "arxivLink": "https://arxiv.org/abs/2410.24204",
            "title": "Gaussian Splatting Gets a Geometry Makeover: Meshing with PBR for Better Inverse Rendering",
            "institute": "Peking University, Sun Yat-sen University, State Key Laboratory of General AI",
            "text": "This paper introduces GeoSplatting, a novel approach that combines 3D Gaussian Splatting with explicit geometric guidance from isosurfaces. Unlike previous methods that approximate surface normals, GeoSplatting leverages the mesh geometry to enable more accurate normal estimation, leading to improved material and lighting disentanglement.",
            "paper-title": "GeoSplatting: Towards Geometry Guided Gaussian Splatting for Physically-based Inverse Rendering",
            "image-path": "flux_paper_image/2410.24204_1730491591.png"
        },

        {
            "startTime": "12:25",
            "arxivId": "2410.23956",
            "arxivLink": "https://arxiv.org/abs/2410.23956",
            "title": "Stop the Presses! LLMs Learn New Languages by Reading Translations!",
            "institute": "University College London",
            "text": "This research explores the effectiveness of using machine-translated text from a single high-quality source language (English) to pretrain multilingual LLMs. Previous work has focused on creating balanced multilingual datasets by collecting data in multiple languages, but this paper demonstrates that translating a large English corpus can be a more efficient and effective approach.",
            "paper-title": "Multilingual Pretraining Using a Large Corpus Machine-Translated from a Single Source Language",
            "image-path": "flux_paper_image/2410.23956_1730489668.png"
        },

        {
            "startTime": "12:53",
            "arxivId": "2410.24022",
            "arxivLink": "https://arxiv.org/abs/2410.24022",
            "title": "Protein Evolution: A New Model Learns the Language of Life!",
            "institute": "Microsoft, Zhejiang University, Huazhong University of Science and Technology...",
            "text": "This research introduces a novel pre-training strategy for protein foundation models that emphasizes the interactions among amino acid residues to enhance the extraction of both short- and long-range co-evolutionary features from sequence data. This differs from previous work by focusing on capturing both local and global co-evolutionary information within protein sequences, rather than relying solely on single-sequence models or multiple sequence alignments.",
            "paper-title": "SFM-Protein: Integrative Co-evolutionary Pre-training for Advanced Protein Sequence Representation",
            "image-path": "flux_paper_image/2410.24022_1730489126.png"
        },

        {
            "startTime": "13:21",
            "arxivId": "2410.23836",
            "arxivLink": "https://arxiv.org/abs/2410.23836",
            "title": "Talking Heads, Moving Bodies: AI Makes 3D Humans Chat Like Real People!",
            "institute": "Tsinghua University, ByteDance, Communication University of China...",
            "text": "This research introduces a new method for generating 3D talking human videos from a single image and audio input. It uses a Mixture-of-Experts (MoE) module to improve the rendering quality and stability of the videos, especially when dealing with different viewpoints and image regions. This is different from previous work that often generated blurry or unrealistic videos, especially in the face and hand regions.",
            "paper-title": "Stereo-Talker: Audio-driven 3D Human Synthesis with Prior-Guided Mixture-of-Experts",
            "image-path": "flux_paper_image/2410.23836_1730488967.png"
        },

        {
            "startTime": "13:50",
            "arxivId": "2410.24153",
            "arxivLink": "https://arxiv.org/abs/2410.24153",
            "title": "Dense Associative Memories: Random Features Make Memories More Efficient!",
            "institute": "IBM, Georgia Institute of Technology",
            "text": "This research proposes a new way to store memories in Dense Associative Memories (DenseAMs) using random features, a technique commonly used in kernel methods. Unlike traditional DenseAMs, this approach doesn't require adding new weights when new memories are introduced, instead, it modifies existing weights.",
            "paper-title": "Dense Associative Memory Through the Lens of Random Features",
            "image-path": "flux_paper_image/2410.24153_1730490169.png"
        },

        {
            "startTime": "14:15",
            "arxivId": "2410.23632",
            "arxivLink": "https://arxiv.org/abs/2410.23632",
            "title": "Boosting with Brains: A New Algorithm That Reuses Samples to Learn Faster",
            "institute": "Amazon, CMU",
            "text": "This research introduces a new agnostic boosting algorithm that reuses samples across multiple rounds of boosting, leading to a more sample-efficient approach compared to previous methods.",
            "paper-title": "Sample-Efficient Agnostic Boosting",
            "image-path": "flux_paper_image/2410.23632_1730489479.png"
        },

        {
            "startTime": "14:36",
            "arxivId": "2410.23620",
            "arxivLink": "https://arxiv.org/abs/2410.23620",
            "title": "Causal Disentanglement: Unmasking Hidden Factors Without Lifting a Finger!",
            "institute": "Massachusetts Institute of Technology, Broad Institute of MIT and Harvard",
            "text": "This research explores causal disentanglement using purely observational data, unlike previous work that relied on interventions. It focuses on nonlinear additive Gaussian noise models and establishes identifiability guarantees for latent factors up to a layer-wise transformation.",
            "paper-title": "Identifiability Guarantees for Causal Disentanglement from Purely Observational Data",
            "image-path": "flux_paper_image/2410.23620_1730490079.png"
        },

        {
            "startTime": "14:56",
            "arxivId": "2410.23327",
            "arxivLink": "https://arxiv.org/abs/2410.23327",
            "title": "Deep Learning Predicts Tree Phenology: AI Outperforms Traditional Models!",
            "institute": "University of Zurich, St. Francis Xavier University, Swiss Federal Institute for Forest Snow and Landscape Research...",
            "text": "This research introduces a novel deep learning architecture, PhenoFormer, for predicting tree phenology, specifically leaf emergence and senescence. Unlike previous work that relied on process-based models or traditional machine learning, PhenoFormer leverages self-attention mechanisms to extract temporal features from climate time series.",
            "paper-title": "Deep learning meets tree phenology modeling: PhenoFormer vs. process-based models",
            "image-path": "flux_paper_image/2410.23327_1730490184.png"
        },

        {
            "startTime": "15:20",
            "arxivId": "2410.23884",
            "arxivLink": "https://arxiv.org/abs/2410.23884",
            "title": "LLMs: Causal Reasoning Champs or Narrative Nincompoops?",
            "institute": "Carnegie Mellon University",
            "text": "This research focuses on how LLMs handle causal reasoning within narratives, specifically examining their ability to extract causal relationships from text and answer causal questions. It goes beyond previous work by investigating the specific failure modes of LLMs in this context, including their reliance on topological ordering, parametric knowledge, and narrative length.",
            "paper-title": "Failure Modes of LLMs for Causal Reasoning on Narratives",
            "image-path": "flux_paper_image/2410.23884_1730489192.png"
        },

        {
            "startTime": "15:45",
            "arxivId": "2410.24211",
            "arxivLink": "https://arxiv.org/abs/2410.24211",
            "title": "Tracking Every Pixel in 3D: DELTA's Speedy Motion Magic",
            "institute": "UMass Amherst, Snap Inc., MIT-IBM Watson AI Lab...",
            "text": "This paper introduces DELTA, a method for dense 3D tracking that efficiently tracks every pixel in a video over hundreds of frames. Unlike previous methods that are limited by computational inefficiency or sparse tracking, DELTA achieves state-of-the-art accuracy while being significantly faster.",
            "paper-title": "DELTA: Dense Efficient Long-range 3D Tracking for any video",
            "image-path": "flux_paper_image/2410.24211_1730490880.png"
        },

        {
            "startTime": "16:03",
            "arxivId": "2410.23619",
            "arxivLink": "https://arxiv.org/abs/2410.23619",
            "title": "Spiking Neurons Get a Speed Boost: New Training Framework Makes Them Faster and Smarter!",
            "institute": "IEEE",
            "text": "This research focuses on improving the training of spiking neural networks (SNNs) that use Time-to-First-Spike (TTFS) coding. The authors identify two key issues limiting TTFS performance: signal diminishing and imbalanced membrane potential distribution. They propose a novel initialization strategy and a temporal weighting decoding method to address these challenges.",
            "paper-title": "ETTFS: An Efficient Training Framework for Time-to-First-Spike Neuron",
            "image-path": "flux_paper_image/2410.23619_1730489060.png"
        },

        {
            "startTime": "16:36",
            "arxivId": "2410.23413",
            "arxivLink": "https://arxiv.org/abs/2410.23413",
            "title": "EchoFM: A Foundation Model That Makes Echocardiograms Sing!",
            "institute": "Massachusetts General Hospital, Harvard Medical School, The University of Georgia",
            "text": "This research introduces EchoFM, a foundation model specifically designed for echocardiography videos. Unlike previous work, EchoFM leverages a self-supervised learning framework that captures both spatial and temporal variability patterns through a spatio-temporal consistent masking strategy and periodic-driven contrastive learning.",
            "paper-title": "EchoFM: Foundation Model for Generalizable Echocardiogram Analysis",
            "image-path": "flux_paper_image/2410.23413_1730490726.png"
        },

        {
            "startTime": "17:01",
            "arxivId": "2410.23686",
            "arxivLink": "https://arxiv.org/abs/2410.23686",
            "title": "GNNs Go Mobile: Dynamic Message Passing for Smarter Graphs",
            "institute": "Chinese Academy of Sciences, Tsinghua University",
            "text": "This paper introduces a novel dynamic message-passing mechanism for GNNs. Unlike previous methods that rely heavily on the input graph structure, this approach projects nodes into a common space with measurable spatial relations. These relations evolve dynamically, facilitating flexible pathway construction for message passing.",
            "paper-title": "Towards Dynamic Message Passing on Graphs",
            "image-path": "flux_paper_image/2410.23686_1730491393.png"
        },

        {
            "startTime": "17:27",
            "arxivId": "2410.23511",
            "arxivLink": "https://arxiv.org/abs/2410.23511",
            "title": "LLMs Get Smart: Dynamic Strategy Planning for Smarter, Cheaper Question Answering",
            "institute": "UC Los Angeles, Meta",
            "text": "This research proposes a novel technique called DyPlan, which dynamically selects the most suitable strategy for answering questions, unlike previous work that relies on a single fixed strategy.",
            "paper-title": "Dynamic Strategy Planning for Efficient Question Answering with Large Language Models",
            "image-path": "flux_paper_image/2410.23511_1730490630.png"
        },

        {
            "startTime": "17:47",
            "arxivId": "2410.24005",
            "arxivLink": "https://arxiv.org/abs/2410.24005",
            "title": "AI Gets a Reality Check: Testing Models with Context, Not Just Data",
            "institute": "University of Cambridge",
            "text": "This research introduces a new paradigm for testing machine learning models called Context-Aware Testing (CAT). Unlike traditional data-only methods, CAT incorporates external knowledge or context to guide the search for meaningful model failures.",
            "paper-title": "Context-Aware Testing: A New Paradigm for Model Testing with Large Language Models",
            "image-path": "flux_paper_image/2410.24005_1730489593.png"
        },

        {
            "startTime": "18:12",
            "arxivId": "2410.23782",
            "arxivLink": "https://arxiv.org/abs/2410.23782",
            "title": "Video Tokens: Merging for Long-Form Video Understanding, But Not Like You Think!",
            "institute": "Korea University, Amazon, Meta",
            "text": "This research explores video token merging strategies for long-form video understanding, focusing on the saliency of tokens rather than just their similarity. It proposes a learnable video token merging (VTM) algorithm that dynamically merges tokens based on their saliency, unlike previous methods that rely on manual partitioning or similarity-based merging.",
            "paper-title": "Video Token Merging for Long-form Video Understanding",
            "image-path": "flux_paper_image/2410.23782_1730489756.png"
        },

        {
            "startTime": "18:38",
            "arxivId": "2410.23691",
            "arxivLink": "https://arxiv.org/abs/2410.23691",
            "title": "AI Builds Its Own Digital Twins: No Humans Needed!",
            "institute": "University of Cambridge",
            "text": "This research introduces an automated approach for designing hybrid digital twins, combining both mechanistic and neural components, using large language models (LLMs) to iteratively search for and optimize high-performing models. This differs from previous work that relied heavily on expert-specified architectures.",
            "paper-title": "Automatically Learning Hybrid Digital Twins of Dynamical Systems",
            "image-path": "flux_paper_image/2410.23691_1730489440.png"
        },

        {
            "startTime": "19:00",
            "arxivId": "2410.24105",
            "arxivLink": "https://arxiv.org/abs/2410.24105",
            "title": "Matchmaker: AI's New Dating App for Data Schemas!",
            "institute": "University of Cambridge",
            "text": "This research proposes Matchmaker, a self-improving language model program for schema matching, which uses synthetic in-context examples to guide the model's reasoning process. This approach differs from previous work by not requiring labeled data for training.",
            "paper-title": "Matchmaker: Self-Improving Large Language Model Programs for Schema Matching",
            "image-path": "flux_paper_image/2410.24105_1730491643.png"
        },

        {
            "startTime": "19:18",
            "arxivId": "2410.24164",
            "arxivLink": "https://arxiv.org/abs/2410.24164",
            "title": "Robots Learn to Fold Laundry (and More!) with a Vision-Language-Action Model",
            "institute": "Physical Intelligence",
            "text": "This research introduces a new robot control model, \u03c0 0 , that leverages a pre-trained vision-language model (VLM) and flow matching to generate continuous actions. This differs from previous work that often relies on autoregressive discretization for action representation.",
            "paper-title": "$\\pi_0$: A Vision-Language-Action Flow Model for General Robot Control",
            "image-path": "flux_paper_image/2410.24164_1730489023.png"
        },

        {
            "startTime": "19:41",
            "arxivId": "2410.24017",
            "arxivLink": "https://arxiv.org/abs/2410.24017",
            "title": "Packing Malware: AI's New Blind Spot?",
            "institute": "University College Dublin, University of Piraeus, Athena Research Center...",
            "text": "This research investigates the impact of packing on the performance of static machine learning-based malware detection and classification systems, focusing on those using visualization techniques. It analyzes various packing techniques and their effects on the performance of machine learning-based detectors and classifiers.",
            "paper-title": "Assessing the Impact of Packing on Machine Learning-Based Malware Detection and Classification Systems",
            "image-path": "flux_paper_image/2410.24017_1730491410.png"
        },

        {
            "startTime": "20:06",
            "arxivId": "2410.23438",
            "arxivLink": "https://arxiv.org/abs/2410.23438",
            "title": "Transformers Learn Like Bigrams, But With a Twist!",
            "institute": "Princeton University",
            "text": "This paper introduces a new model called Sparse Contextual Bigram (SCB) that extends the classical bigram model by allowing the next token to depend on a sparse set of previous tokens. This model is then analyzed using a one-layer linear transformer, which is a simplified architecture that allows for theoretical analysis. The paper also investigates the training dynamics and sample complexity of learning SCB using a gradient-based algorithm.",
            "paper-title": "Learning and Transferring Sparse Contextual Bigrams with Linear Transformers",
            "image-path": "flux_paper_image/2410.23438_1730490681.png"
        },

        {
            "startTime": "20:35",
            "arxivId": "2410.23855",
            "arxivLink": "https://arxiv.org/abs/2410.23855",
            "title": "GNNs Get a Memory Boost: Retrieval-Augmented Graph Learning Makes Them Smarter!",
            "institute": "Peking University",
            "text": "This paper introduces RAGRAPH, a framework that enhances Graph Neural Networks (GNNs) by integrating Retrieval-Augmented Generation (RAG) techniques. Unlike previous work that focuses on in-context learning (ICL), RAGRAPH leverages external graph data to improve generalization on unseen scenarios.",
            "paper-title": "RAGraph: A General Retrieval-Augmented Graph Learning Framework",
            "image-path": "flux_paper_image/2410.23855_1730489205.png"
        },

        {
            "startTime": "21:06",
            "arxivId": "2410.23501",
            "arxivLink": "https://arxiv.org/abs/2410.23501",
            "title": "Language Models: All or Nothing, Linearity's the Thing!",
            "institute": "University of Trento, University of Pisa, Samsung...",
            "text": "This research extends previous identifiability results for next-token predictors by relaxing the assumptions of diversity and equal representation dimensionality.",
            "paper-title": "All or None: Identifiable Linear Properties of Next-token Predictors in Language Modeling",
            "image-path": "flux_paper_image/2410.23501_1730489073.png"
        },

        {
            "startTime": "21:31",
            "arxivId": "2410.23603",
            "arxivLink": "https://arxiv.org/abs/2410.23603",
            "title": "Can AI See Beauty? Deep Learning Uncovers the Language of Aesthetics",
            "institute": "Harvard University",
            "text": "This research uses deep neural networks to predict human beauty ratings of images, comparing the performance of models trained on different modalities (vision, language, and multimodal). It investigates the extent to which language contributes to our perception of beauty, going beyond previous work by examining the role of machine-generated captions in predicting aesthetic judgments.",
            "paper-title": "Using Multimodal Deep Neural Networks to Disentangle Language from Visual Aesthetics",
            "image-path": "flux_paper_image/2410.23603_1730489079.png"
        },

        {
            "startTime": "21:51",
            "arxivId": "2410.23996",
            "arxivLink": "https://arxiv.org/abs/2410.23996",
            "title": "Multimodal Data: Untangling the Knots with DISENTANGLEDSSL",
            "institute": "MIT, Broad Institute of MIT and Harvard, TU Munich",
            "text": "This research proposes a new self-supervised learning approach called DISENTANGLEDSSL for disentangling multimodal data. Unlike previous methods, DISENTANGLEDSSL provides theoretical guarantees on the optimality of disentangled representations, even when the Minimum Necessary Information (MNI) point is unattainable.",
            "paper-title": "An Information Criterion for Controlled Disentanglement of Multimodal Data",
            "image-path": "flux_paper_image/2410.23996_1730491681.png"
        },

        {
            "startTime": "22:19",
            "arxivId": "2410.23718",
            "arxivLink": "https://arxiv.org/abs/2410.23718",
            "title": "3D Models Got a New Security Guard: GaussianMarker Protects Your Creations!",
            "institute": "Hong Kong Baptist University, Nvidia",
            "text": "This research proposes a novel method for copyright protection of 3D Gaussian Splatting (3DGS) models by embedding copyright messages into the 3D Gaussian parameters. Unlike previous methods that focus on implicit neural representations, this approach leverages the explicit geometry of 3DGS models and utilizes uncertainty estimation to ensure invisibility and robustness.",
            "paper-title": "GaussianMarker: Uncertainty-Aware Copyright Protection of 3D Gaussian Splatting",
            "image-path": "flux_paper_image/2410.23718_1730491351.png"
        },

        {
            "startTime": "22:41",
            "arxivId": "2410.23625",
            "arxivLink": "https://arxiv.org/abs/2410.23625",
            "title": "EMG Benchmarks: A New Way to Test Muscle-Powered Tech!",
            "institute": "CMU",
            "text": "This research introduces the first benchmark specifically designed to evaluate the out-of-distribution performance of electromyography (EMG) classification algorithms. This benchmark includes nine datasets, the largest collection of EMG datasets in a benchmark, and a new dataset featuring a novel, easy-to-wear high-density EMG wearable for data collection.",
            "paper-title": "EMGBench: Benchmarking Out-of-Distribution Generalization and Adaptation for Electromyography",
            "image-path": "flux_paper_image/2410.23625_1730490585.png"
        },

        {
            "startTime": "23:01",
            "arxivId": "2410.23321",
            "arxivLink": "https://arxiv.org/abs/2410.23321",
            "title": "Deep Learning Gets a Boost from AlphaFold: Low-Res Cryo-EM Maps Get a Makeover!",
            "institute": "University of Washington",
            "text": "This research introduces DeepTracer-LowResEnhance, a new method that combines DeepTracer with AlphaFold to improve protein structure prediction from low-resolution cryo-EM maps. This approach differs from previous methods by integrating AlphaFold at an earlier stage to enhance the features in low-resolution maps with its sequence data.",
            "paper-title": "Beyond Current Boundaries: Integrating Deep Learning and AlphaFold for Enhanced Protein Structure Prediction from Low-Resolution Cryo-EM Maps",
            "image-path": "flux_paper_image/2410.23321_1730490923.png"
        },

        {
            "startTime": "23:26",
            "arxivId": "2410.23299",
            "arxivLink": "https://arxiv.org/abs/2410.23299",
            "title": "LLMs for Chip Design: Can They Pass the Formal Verification Test?",
            "institute": "UC Berkeley, Nvidia",
            "text": "This research introduces FVEval, the first comprehensive benchmark for evaluating large language models (LLMs) on tasks related to formal verification of digital hardware. Unlike previous work, FVEval includes a wider range of test instances and considers three sub-tasks that exercise various LLM capabilities.",
            "paper-title": "FVEval: Understanding Language Model Capabilities in Formal Verification of Digital Hardware",
            "image-path": "flux_paper_image/2410.23299_1730490595.png"
        },

        {
            "startTime": "23:49",
            "arxivId": "2410.24032",
            "arxivLink": "https://arxiv.org/abs/2410.24032",
            "title": "Chatbots Get Personal: A Multi-Agent System for Tailored Exploration",
            "institute": "Southeast University, Microsoft",
            "text": "This research introduces a multi-agent system for personalized exploration, which differs from previous work by actively prompting users for both explicit and implicit needs, leading to more tailored solutions.",
            "paper-title": "Navigating the Unknown: A Chat-Based Collaborative Interface for Personalized Exploratory Tasks",
            "image-path": "flux_paper_image/2410.24032_1730489148.png"
        },

        {
            "startTime": "24:14",
            "arxivId": "2410.23815",
            "arxivLink": "https://arxiv.org/abs/2410.23815",
            "title": "Speech Synthesis Gets a Background Check: New System Makes AI Voices Sound More Real",
            "institute": "Northwestern Polytechnical University, Huawei Cloud",
            "text": "This research introduces a novel approach to speech synthesis by incorporating background audio generation using large language models (LLMs). Unlike previous methods that focused solely on vocal quality, this system adds contextual sounds to create a more immersive and realistic auditory experience.",
            "paper-title": "The NPU-HWC System for the ISCSLP 2024 Inspirational and Convincing Audio Generation Challenge",
            "image-path": "flux_paper_image/2410.23815_1730490748.png"
        },

        {
            "startTime": "24:35",
            "arxivId": "2410.23743",
            "arxivLink": "https://arxiv.org/abs/2410.23743",
            "title": "LLMs: Thinking Fast, Thinking Slow, and Their Gradient Glow-Up!",
            "institute": "University of Maryland, University of Chicago",
            "text": "This research investigates the gradient patterns of different layers in LLMs during training, focusing on how fast vs. slow thinking affects these patterns. Unlike previous work that mainly probes model behavior through performance changes, this study directly analyzes the gradients themselves.",
            "paper-title": "What Happened in LLMs Layers when Trained for Fast vs. Slow Thinking: A Gradient Perspective",
            "image-path": "flux_paper_image/2410.23743_1730489599.png"
        },

        {
            "startTime": "24:53",
            "arxivId": "2410.23953",
            "arxivLink": "https://arxiv.org/abs/2410.23953",
            "title": "Social Choice Goes to School: Learning Theory Meets AI Alignment",
            "institute": "University of California Berkeley",
            "text": "This research introduces the \"representative social choice\" framework, which models collective decision-making processes where the number of issues and individuals is too large to consider all preferences directly. This differs from previous work by incorporating the concept of democratic representation into social choice theory.",
            "paper-title": "Representative Social Choice: From Learning Theory to AI Alignment",
            "image-path": "flux_paper_image/2410.23953_1730491508.png"
        },

        {
            "startTime": "25:15",
            "arxivId": "2410.23803",
            "arxivLink": "https://arxiv.org/abs/2410.23803",
            "title": "AI Makes Virtual Worlds More Accessible: Can It Handle the Bias?",
            "institute": "Coburg University, University of Cambridge",
            "text": "This paper explores the potential of AI-generated content (AIGC) to create more inclusive and accessible extended reality (XR) environments. It focuses on how AIGC can reduce the need for 3D modeling expertise, enable symbolic input for users with limited dexterity, and facilitate multimodal interaction. The paper also highlights challenges related to bias in foundation models, 3D content editing, and the lack of metadata for accessible rendering.",
            "paper-title": "Generative AI for Accessible and Inclusive Extended Reality",
            "image-path": "flux_paper_image/2410.23803_1730489362.png"
        },

        {
            "startTime": "25:41",
            "arxivId": "2410.23382",
            "arxivLink": "https://arxiv.org/abs/2410.23382",
            "title": "Neural Network Robustness: A Deep Dive into Lipschitz Constants",
            "institute": "CMU",
            "text": "This research proposes an analytical expression for the Lipschitz constant of neural networks, providing a theoretical basis for estimating and improving robustness. Unlike previous work that focused on numerical estimations, this paper explores the relationship between network architecture and the corresponding Lipschitz constants.",
            "paper-title": "Estimating Neural Network Robustness via Lipschitz Constant and Architecture Sensitivity",
            "image-path": "flux_paper_image/2410.23382_1730489641.png"
        },

        {
            "startTime": "26:01",
            "arxivId": "2410.23641",
            "arxivLink": "https://arxiv.org/abs/2410.23641",
            "title": "Skeleton Action Recognition: A New Way to Augment Your Data, One Pose at a Time!",
            "institute": "Tsinghua University",
            "text": "This research introduces a novel \"recover-and-resample\" augmentation framework for skeleton-based action recognition. Unlike previous methods that rely on handcrafted augmentations or adversarial learning, this approach leverages a \"complete action prior\" to generate more realistic and diverse training data.",
            "paper-title": "Recovering Complete Actions for Cross-dataset Skeleton Action Recognition",
            "image-path": "flux_paper_image/2410.23641_1730491067.png"
        },

        {
            "startTime": "26:24",
            "arxivId": "2410.23745",
            "arxivLink": "https://arxiv.org/abs/2410.23745",
            "title": "Neural Network Operators: From Zero to Hero!",
            "institute": "Tsinghua University",
            "text": "This research explores neural operator synthesis, a new approach to automatically discover novel neural operators by composing them from basic programming language atoms. This differs from existing methods like neural architecture search (NAS) and tensor compilers, which focus on composing or optimizing existing operators.",
            "paper-title": "Syno: Structured Synthesis for Neural Operators",
            "image-path": "flux_paper_image/2410.23745_1730490721.png"
        },

        {
            "startTime": "26:52",
            "arxivId": "2410.23300",
            "arxivLink": "https://arxiv.org/abs/2410.23300",
            "title": "Collaborative Filtering: Rank-ing Up Performance with a Warm-Start Strategy",
            "institute": "University of Michigan, MIT, Snap Inc.",
            "text": "This research explores the relationship between the stable rank of user and item embedding matrices and the performance of collaborative filtering (CF) systems. Unlike previous work that focuses on model-level modifications, this study delves into the intrinsic properties of the embedding matrices themselves.",
            "paper-title": "Understanding and Scaling Collaborative Filtering Optimization from the Perspective of Matrix Rank",
            "image-path": "flux_paper_image/2410.23300_1730489320.png"
        },

        {
            "startTime": "27:19",
            "arxivId": "2410.24175",
            "arxivLink": "https://arxiv.org/abs/2410.24175",
            "title": "LLMs Get a Back-Translation Boost for Complex Instructions!",
            "institute": "Tsinghua University",
            "text": "This research proposes a novel data generation technique called \"constraint back-translation\" to improve LLMs' ability to follow complex instructions. Unlike previous methods that rely on advanced LLMs to generate both instructions and responses, this approach leverages existing high-quality instruction-response pairs and extracts implicit constraints from the responses.",
            "paper-title": "Constraint Back-translation Improves Complex Instruction Following of Large Language Models",
            "image-path": "flux_paper_image/2410.24175_1730490089.png"
        },

        {
            "startTime": "27:39",
            "arxivId": "2410.23726",
            "arxivLink": "https://arxiv.org/abs/2410.23726",
            "title": "Reward Models: Not So Smart After All? Uncertainty-Aware RLHF to the Rescue!",
            "institute": "Indian Institute of Science",
            "text": "This paper introduces a new approach to RLHF that accounts for the uncertainty inherent in reward models. Unlike previous work that relies on a single reward model, this method uses an ensemble of models to estimate the variance of the reward, leading to more robust and reliable policy optimization.",
            "paper-title": "Towards Reliable Alignment: Uncertainty-aware RLHF",
            "image-path": "flux_paper_image/2410.23726_1730490859.png"
        },

        {
            "startTime": "28:00",
            "arxivId": "2410.23810",
            "arxivLink": "https://arxiv.org/abs/2410.23810",
            "title": "Atari Gets a Makeover: New Benchmark Lets AI Agents Play with Continuous Controls",
            "institute": "McGill University, Google",
            "text": "This paper introduces the Continuous Arcade Learning Environment (CALE), an extension of the well-known Arcade Learning Environment (ALE). CALE uses the same Atari 2600 emulator but adds support for continuous actions, allowing researchers to evaluate both discrete and continuous control agents on the same environment suite.",
            "paper-title": "CALE: Continuous Arcade Learning Environment",
            "image-path": "flux_paper_image/2410.23810_1730489727.png"
        },

        {
            "startTime": "28:22",
            "arxivId": "2410.23346",
            "arxivLink": "https://arxiv.org/abs/2410.23346",
            "title": "Galaxy Simulations Get a Speed Boost with Machine Learning!",
            "institute": "University of Tokyo",
            "text": "This research introduces a new framework for galaxy simulations that uses machine learning to accelerate the process of simulating supernova feedback. This approach differs from previous work by using a surrogate model to predict the distribution of gas particles after a supernova explosion, allowing for larger timesteps and a significant reduction in computational cost.",
            "paper-title": "ASURA-FDPS-ML: Star-by-star Galaxy Simulations Accelerated by Surrogate Modeling for Supernova Feedback",
            "image-path": "flux_paper_image/2410.23346_1730489390.png"
        },

        {
            "startTime": "28:45",
            "arxivId": "2410.24001",
            "arxivLink": "https://arxiv.org/abs/2410.24001",
            "title": "2D Images to the Rescue: Training 3D Object Detection Without 3D Data!",
            "institute": "Shanghai Qi Zhi Institute, IIIS Tsinghua University, Shanghai AI Lab",
            "text": "This research proposes a novel framework, ImOV3D, that leverages 2D images to train a 3D object detection model without requiring any 3D point clouds or annotations. This approach addresses the scarcity of labeled 3D datasets, a major bottleneck in open-vocabulary 3D object detection.",
            "paper-title": "ImOV3D: Learning Open-Vocabulary Point Clouds 3D Object Detection from Only 2D Images",
            "image-path": "flux_paper_image/2410.24001_1730489914.png"
        },

        {
            "startTime": "29:15",
            "arxivId": "2410.23370",
            "arxivLink": "https://arxiv.org/abs/2410.23370",
            "title": "Multilingual Vision-Language Model Speaks Fluent Remote Sensing!",
            "institute": "University of Lisbon, NOVA University Lisbon, \u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
            "text": "This research explores fine-tuning a multilingual CLIP model for the remote sensing domain, using a self-supervised method based on aligning local and global representations from individual input images, along with the standard CLIP objective. This approach differs from previous work by incorporating multilingual data augmentation through machine translation, which has not been extensively explored in this domain.",
            "paper-title": "Multilingual Vision-Language Pre-training for the Remote Sensing Domain",
            "image-path": "flux_paper_image/2410.23370_1730489451.png"
        },

        {
            "startTime": "29:39",
            "arxivId": "2410.24139",
            "arxivLink": "https://arxiv.org/abs/2410.24139",
            "title": "Waste Not, Want Not: New AI Sharpens Recycling Vision",
            "institute": "Mohamed bin Zayed University of AI, Institute of Space Technology, IBM Research",
            "text": "This research introduces COSNet, a semantic segmentation network that uses boundary cues to improve waste object segmentation in cluttered scenes. Unlike previous methods that rely solely on multi-contextual features, COSNet incorporates a feature sharpening block (FSB) and a boundary enhancement module (BEM) to explicitly highlight object boundaries, leading to more accurate segmentation.",
            "paper-title": "COSNet: A Novel Semantic Segmentation Network using Enhanced Boundaries in Cluttered Scenes",
            "image-path": "flux_paper_image/2410.24139_1730489474.png"
        },

        {
            "startTime": "30:04",
            "arxivId": "2410.23398",
            "arxivLink": "https://arxiv.org/abs/2410.23398",
            "title": "Dilated Entropy: The Secret Sauce for AI in Games?",
            "institute": "MIT, Columbia University",
            "text": "This paper introduces a new pair of norms, called treeplex norms, to analyze the strong convexity of the DilEnt regularizer. This approach provides a more accurate and efficient way to measure the performance of first-order optimization methods in extensive-form games compared to previous methods.",
            "paper-title": "On the Optimality of Dilated Entropy and Lower Bounds for Online Learning in Extensive-Form Games",
            "image-path": "flux_paper_image/2410.23398_1730489890.png"
        },

        {
            "startTime": "30:25",
            "arxivId": "2410.23320",
            "arxivLink": "https://arxiv.org/abs/2410.23320",
            "title": "Speech Synthesis Gets a Memory Boost: Gated Linear Attention Makes Voice Cloning a Breeze!",
            "institute": "CNRS, Sorbonne Universit\u00e9, RWKV Foundation...",
            "text": "This research introduces LINA-SPEECH, a model that replaces traditional self-attention mechanisms with Gated Linear Attention (GLA) for text-to-speech synthesis. Unlike previous work that relies on transformers, LINA-SPEECH leverages GLA's recurrent architecture, enabling efficient voice cloning from multiple speech samples.",
            "paper-title": "Lina-Speech: Gated Linear Attention is a Fast and Parameter-Efficient Learner for text-to-speech synthesis",
            "image-path": "flux_paper_image/2410.23320_1730490656.png"
        },

        {
            "startTime": "30:50",
            "arxivId": "2410.24117",
            "arxivLink": "https://arxiv.org/abs/2410.24117",
            "title": "AlphaTrans: Code Translation on Steroids, Validated and Scalable!",
            "institute": "University of Illinois, Indian Institute of Science, Cornell University...",
            "text": "This research introduces AlphaTrans, a neuro-symbolic approach for repository-level code translation and validation. Unlike previous work that focused on smaller code snippets or crafted benchmarks, AlphaTrans tackles the complexity of real-world projects with inter- and intra-class dependencies, custom types, and PL-specific features.",
            "paper-title": "Repository-Level Compositional Code Translation and Validation",
            "image-path": "flux_paper_image/2410.24117_1730489046.png"
        },

        {
            "startTime": "31:18",
            "arxivId": "2410.23730",
            "arxivLink": "https://arxiv.org/abs/2410.23730",
            "title": "GPT-4V: Fashion Stylist or Fashion Faux Pas?",
            "institute": "ZOZO Research",
            "text": "This research explores the zero-shot performance of GPT-4V on fashion aesthetic evaluation, a task that involves judging how well outfits suit individuals in images. Unlike previous work that relied on smaller datasets created through human annotations, this study leverages a large-scale dataset of user-generated fashion content from the WEAR app.",
            "paper-title": "An Empirical Analysis of GPT-4V's Performance on Fashion Aesthetic Evaluation",
            "image-path": "flux_paper_image/2410.23730_1730489138.png"
        },

        {
            "startTime": "31:38",
            "arxivId": "2410.23800",
            "arxivLink": "https://arxiv.org/abs/2410.23800",
            "title": "Occluded? No Problem! New AI Makes Full-Body Avatars From Partial Videos",
            "institute": "UC Berkeley, ShanghaiTech University",
            "text": "This research tackles the challenge of reconstructing a complete human avatar from a single video where parts of the body are hidden, a common issue in real-world footage. Unlike previous methods that assume full visibility, this approach leverages structural normal priors and generative diffusion priors to fill in the missing information.",
            "paper-title": "SOAR: Self-Occluded Avatar Recovery from a Single Video In the Wild",
            "image-path": "flux_paper_image/2410.23800_1730491188.png"
        },

        {
            "startTime": "32:06",
            "arxivId": "2410.24144",
            "arxivLink": "https://arxiv.org/abs/2410.24144",
            "title": "HoloChrome: Speckle-Busting Holograms with a Rainbow of Light!",
            "institute": "Meta, Northwestern University",
            "text": "This research introduces HoloChrome, a holographic display framework that uses polychromatic illumination to reduce speckle noise. Unlike previous methods that rely on time-multiplexing or partially coherent illumination, HoloChrome leverages wavelength diversity to create uncorrelated speckle patterns, effectively averaging them out.",
            "paper-title": "HoloChrome: Polychromatic Illumination for Speckle Reduction in Holographic Near-Eye Displays",
            "image-path": "flux_paper_image/2410.24144_1730491388.png"
        },

        {
            "startTime": "32:25",
            "arxivId": "2410.23461",
            "arxivLink": "https://arxiv.org/abs/2410.23461",
            "title": "Learning to Ignore the World: A Game of Transformations and Predictions",
            "institute": "Yale University, Toyota Technological Institute at Chicago, \u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
            "text": "This paper introduces a new framework for out-of-distribution generalization by describing distribution shifts through data transformations. It differs from prior work that relies on distance or divergence measures.",
            "paper-title": "Transformation-Invariant Learning and Theoretical Guarantees for OOD Generalization",
            "image-path": "flux_paper_image/2410.23461_1730490975.png"
        },

        {
            "startTime": "32:50",
            "arxivId": "2410.23910",
            "arxivLink": "https://arxiv.org/abs/2410.23910",
            "title": "3D Object Detection Gets a Confidence Boost: Evidential Learning for Uncertainty Estimation",
            "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne, Nvidia",
            "text": "This research introduces a novel framework for quantifying uncertainty in 3D object detection using Evidential Deep Learning (EDL). Unlike traditional methods that rely on sampling, this approach modifies the network architecture and loss function to directly estimate uncertainty at the Bird's Eye View (BEV) level, providing a computationally efficient solution.",
            "paper-title": "Uncertainty Estimation for 3D Object Detection via Evidential Learning",
            "image-path": "flux_paper_image/2410.23910_1730489211.png"
        },

        {
            "startTime": "33:10",
            "arxivId": "2410.24190",
            "arxivLink": "https://arxiv.org/abs/2410.24190",
            "title": "AI Electioneering: Can Chatbots Sway Your Vote?",
            "institute": "University of California Berkeley, University of Chicago",
            "text": "This research goes beyond analyzing LLMs' political leanings in surveys or closed-form questions. It investigates how these models exhibit their political leanings in interactive conversations with humans and how this can influence voters' choices.",
            "paper-title": "Hidden Persuaders: LLMs' Political Leaning and Their Influence on Voters",
            "image-path": "flux_paper_image/2410.24190_1730490766.png"
        },

        {
            "startTime": "33:34",
            "arxivId": "2410.23584",
            "arxivLink": "https://arxiv.org/abs/2410.23584",
            "title": "LLMs Build Ontologies: From Wikipedia to arXiv, It's a Knowledge Graph Party!",
            "institute": "University of Cambridge, University of Edinburgh",
            "text": "This research proposes OLLM, a method for building ontologies end-to-end using LLMs. Unlike previous work that focuses on individual subtasks like concept discovery and relation extraction, OLLM models entire subcomponents of the target ontology, capturing interactions between subtasks.",
            "paper-title": "End-to-End Ontology Learning with Large Language Models",
            "image-path": "flux_paper_image/2410.23584_1730491365.png"
        },

        {
            "startTime": "33:59",
            "arxivId": "2410.23819",
            "arxivLink": "https://arxiv.org/abs/2410.23819",
            "title": "Weight Decay's Secret: Making Attention Layers Go Low-Rank!",
            "institute": "Google, ETH Zurich",
            "text": "This research delves into the impact of weight decay on attention layers, specifically focusing on how it induces low-rank behavior in the key-query and value-projection matrices. Unlike previous work that focused on global minima, this study analyzes the optimization dynamics during training, showing that the low-rank effect emerges exponentially quickly.",
            "paper-title": "Weight decay induces low-rank attention layers",
            "image-path": "flux_paper_image/2410.23819_1730490321.png"
        },

        {
            "startTime": "34:25",
            "arxivId": "2410.23510",
            "arxivLink": "https://arxiv.org/abs/2410.23510",
            "title": "Tiny Transformers: Big on Sentence Compression!",
            "institute": "ETH Zurich",
            "text": "This research explores the potential of compressing entire sentences into single token embeddings using small transformer networks, unlike previous work that focused on compressing sequences of hidden states or producing sentence embeddings for downstream tasks.",
            "paper-title": "Tiny Transformers Excel at Sentence Compression",
            "image-path": "flux_paper_image/2410.23510_1730490550.png"
        },

        {
            "startTime": "34:43",
            "arxivId": "2410.24012",
            "arxivLink": "https://arxiv.org/abs/2410.24012",
            "title": "Graph Generation Gets a Branching Out: New Diffusion Model Twigs for Conditional Tasks",
            "institute": "Aalto University, MIT, Idiap Research Institute",
            "text": "This paper introduces a new diffusion framework called Twigs for conditional graph generation. Unlike previous methods that rely on classifier-based or classifier-free guidance, Twigs uses multiple co-evolving diffusion processes, one for the graph structure and others for dependent variables. This allows for more intricate interactions and dependencies to be captured.",
            "paper-title": "Diffusion Twigs with Loop Guidance for Conditional Graph Generation",
            "image-path": "flux_paper_image/2410.24012_1730488978.png"
        },

        {
            "startTime": "35:10",
            "arxivId": "2410.24098",
            "arxivLink": "https://arxiv.org/abs/2410.24098",
            "title": "Tuning Up Image Quality: How Medical Images Need a Different Kind of Tune-Up",
            "institute": "University of Cambridge",
            "text": "This research focuses on optimizing the HaarPSI image quality assessment measure for medical images. Unlike previous work that primarily focused on natural images, this study adapts the measure to the unique characteristics of medical images, leading to improved performance.",
            "paper-title": "Parameter choices in HaarPSI for IQA with medical images",
            "image-path": "flux_paper_image/2410.24098_1730489261.png"
        },

        {
            "startTime": "35:29",
            "arxivId": "2410.23916",
            "arxivLink": "https://arxiv.org/abs/2410.23916",
            "title": "Transformers Take the Wheel: AI-Powered Trajectory Optimization for Robots",
            "institute": "Polytechnic University of Turin, Stanford University",
            "text": "This research proposes a framework that combines transformer-based neural networks with traditional optimization methods for trajectory generation in model predictive control (MPC). Unlike previous work that focuses on either purely optimization-based or learning-based approaches, this method leverages the strengths of both.",
            "paper-title": "Transformer-Based Model Predictive Control: Trajectory Optimization via Sequence Modeling",
            "image-path": "flux_paper_image/2410.23916_1730489654.png"
        },

        {
            "startTime": "35:49",
            "arxivId": "2410.23889",
            "arxivLink": "https://arxiv.org/abs/2410.23889",
            "title": "Solving Parametric PDEs: A Low-Rank Adaptation Trick for Neural Solvers",
            "institute": "Sorbonne University",
            "text": "This research proposes a novel adaptation mechanism called GEPS, which uses a low-rank matrix to efficiently adapt neural PDE solvers to new environments. Unlike previous methods, GEPS scales well with the number of parameters and environments, making it suitable for complex problems.",
            "paper-title": "GEPS: Boosting Generalization in Parametric PDE Neural Solvers through Adaptive Conditioning",
            "image-path": "flux_paper_image/2410.23889_1730491124.png"
        },

        {
            "startTime": "36:12",
            "arxivId": "2410.24050",
            "arxivLink": "https://arxiv.org/abs/2410.24050",
            "title": "Transformer Training: A Visual Feast for the Eyes (and Brains)",
            "institute": "Meta",
            "text": "This research introduces a visual sandbox for exploring the training dynamics of a small-scale transformer model with a constrained embedding dimension of 2. This allows for a comprehensive visualization of each layer's dynamics, providing insights into training behaviors that are often obscured in larger models.",
            "paper-title": "A Visual Case Study of the Training Dynamics in Neural Networks",
            "image-path": "flux_paper_image/2410.24050_1730490274.png"
        },

        {
            "startTime": "36:32",
            "arxivId": "2410.23433",
            "arxivLink": "https://arxiv.org/abs/2410.23433",
            "title": "Ebola Genes: RNA-Seq and NanoString Sing in Harmony!",
            "institute": "Wake Forest University School of Medicine, George Mason University, Massachusetts Institute of Technology",
            "text": "This research compares RNA-Seq and NanoString technologies for gene expression analysis in Ebola-infected non-human primates, focusing on the concordance between the two platforms. Unlike previous studies that primarily focused on individual platforms, this study investigates the consistency of gene expression measurements across both technologies.",
            "paper-title": "Assessing Concordance between RNA-Seq and NanoString Technologies in Ebola-Infected Nonhuman Primates Using Machine Learning",
            "image-path": "flux_paper_image/2410.23433_1730489840.png"
        },

        {
            "startTime": "36:54",
            "arxivId": "2410.23577",
            "arxivLink": "https://arxiv.org/abs/2410.23577",
            "title": "Seeing Beyond the Obvious: How Non-Semantic Context Boosts Image Reconstruction",
            "institute": "University of Science and Technology of China, Stanford University",
            "text": "This research introduces MS-Glance, a novel descriptor that captures non-semantic image context, unlike previous work that primarily focuses on semantic information. MS-Glance leverages a perception-driven rule to randomly select pixels, forming a vector representing global context.",
            "paper-title": "MS-Glance: Non-semantic context vectors and the applications in supervising image reconstruction",
            "image-path": "flux_paper_image/2410.23577_1730489068.png"
        },

        {
            "startTime": "37:26",
            "arxivId": "2410.23434",
            "arxivLink": "https://arxiv.org/abs/2410.23434",
            "title": "Low-Rank Learning: A Matrix Masterclass for Smarter Bots!",
            "institute": "KTH Royal Institute of Technology, MIT",
            "text": "This research introduces a new model-free algorithm, LoRa-PI, for reinforcement learning in systems with low-rank latent structure. Unlike previous approaches, LoRa-PI doesn't require prior knowledge of the structure and achieves order-optimal sample complexity under milder conditions.",
            "paper-title": "Model-free Low-Rank Reinforcement Learning via Leveraged Entry-wise Matrix Estimation",
            "image-path": "flux_paper_image/2410.23434_1730489766.png"
        },

        {
            "startTime": "37:46",
            "arxivId": "2410.23692",
            "arxivLink": "https://arxiv.org/abs/2410.23692",
            "title": "LLMs Go on a City-Wide Road Trip: Predicting Human Mobility with Instruction Tuning",
            "institute": "Southern University of Science and Technology, University of Tokyo",
            "text": "This research introduces Llama-3-8B-Mob, a large language model fine-tuned with instruction tuning for long-term citywide mobility prediction. Unlike previous work that focused on short-term predictions, this study explores the potential of LLMs for predicting human movement over extended periods.",
            "paper-title": "Instruction-Tuning Llama-3-8B Excels in City-Scale Mobility Prediction",
            "image-path": "flux_paper_image/2410.23692_1730490830.png"
        },

        {
            "startTime": "38:09",
            "arxivId": "2410.24169",
            "arxivLink": "https://arxiv.org/abs/2410.24169",
            "title": "NNIPs Go Big: Attention is the New Symmetry for Scalable Interatomic Potentials",
            "institute": "UC Berkeley",
            "text": "This research challenges the prevailing approach of incorporating physical constraints into NNIPs, arguing that these constraints hinder scalability. Instead, it proposes a novel architecture, EScAIP, that leverages attention mechanisms to improve model expressivity and efficiency.",
            "paper-title": "The Importance of Being Scalable: Improving the Speed and Accuracy of Neural Network Interatomic Potentials Across Chemical Domains",
            "image-path": "flux_paper_image/2410.24169_1730491060.png"
        },

        {
            "startTime": "38:30",
            "arxivId": "2410.24096",
            "arxivLink": "https://arxiv.org/abs/2410.24096",
            "title": "Reinforcement Learning Goes to School: A Safe, Model-Agnostic Approach to Training AI",
            "institute": "Microsoft Research, University of Washington",
            "text": "This research introduces a novel meta-learning framework for safe reinforcement learning. Unlike previous methods that rely on models of the environment, this approach uses a \"safeguard\" \u2013 a finite-state machine that monitors safety and shapes the reward signal for the agent. This allows for model-agnostic learning, meaning the agent can adapt to new tasks without needing to learn a new model for each one.",
            "paper-title": "Progressive Safeguards for Safe and Model-Agnostic Reinforcement Learning",
            "image-path": "flux_paper_image/2410.24096_1730491235.png"
        },

        {
            "startTime": "38:55",
            "arxivId": "2410.23842",
            "arxivLink": "https://arxiv.org/abs/2410.23842",
            "title": "Google's News Feed: A Popularity Contest?",
            "institute": "University of Cambridge",
            "text": "This research expands on previous studies by examining news diversity across Brazil, the UK, and the US, using a larger dataset and incorporating new metrics like information quality and the number of articles published by each outlet.",
            "paper-title": "Auditing Google's Search Algorithm: Measuring News Diversity Across Brazil, the UK, and the US",
            "image-path": "flux_paper_image/2410.23842_1730491039.png"
        },

        {
            "startTime": "39:13",
            "arxivId": "2410.24070",
            "arxivLink": "https://arxiv.org/abs/2410.24070",
            "title": "RNNs: Learning the Ropes, One Dynamic at a Time!",
            "institute": "ETH Zurich, University of Oxford",
            "text": "This research introduces a new test case for evaluating dynamic representation alignment metrics, focusing on how representations develop during compositional learning in recurrent neural networks (RNNs). This test case goes beyond comparing static representations and instead examines how representations change over time as the network learns to solve a task.",
            "paper-title": "Dynamical similarity analysis uniquely captures how computations develop in RNNs",
            "image-path": "flux_paper_image/2410.24070_1730489314.png"
        },

        {
            "startTime": "39:38",
            "arxivId": "2410.23749",
            "arxivLink": "https://arxiv.org/abs/2410.23749",
            "title": "Transformers Get a Time-Series Tune-Up: LSEAttention to the Rescue!",
            "institute": "Google",
            "text": "This research introduces LSEAttention, a new approach to address entropy collapse in transformer models for time series forecasting. It differs from previous work by focusing on numerical stability through the Log-Sum-Exp trick and the GELU activation function.",
            "paper-title": "LSEAttention is All You Need for Time Series Forecasting",
            "image-path": "flux_paper_image/2410.23749_1730490346.png"
        },

        {
            "startTime": "40:10",
            "arxivId": "2410.24034",
            "arxivLink": "https://arxiv.org/abs/2410.24034",
            "title": "Can AI Read Like a Historian? Gemini Takes on Handwritten History!",
            "institute": "University of California Berkeley, Google AI",
            "text": "This research compares the accuracy of a multimodal LLM, Gemini, to existing state-of-the-art Transformer-based models for transcribing handwritten historical documents. Unlike previous work, it focuses on the zero-shot performance of Gemini without any fine-tuning or training on specific datasets.",
            "paper-title": "Handwriting Recognition in Historical Documents with Multimodal LLM",
            "image-path": "flux_paper_image/2410.24034_1730489220.png"
        },

        {
            "startTime": "40:30",
            "arxivId": "2410.23656",
            "arxivLink": "https://arxiv.org/abs/2410.23656",
            "title": "BPE Tokenization: Synthetic Languages Get a Boost!",
            "institute": "UC Berkeley",
            "text": "This research investigates the impact of morphological typology on BPE tokenization and language modeling performance, comparing languages with synthetic and analytic morphological structures. It goes beyond previous work by analyzing subword productivity and frequency trends, and by examining the effect of morphological typology on language modeling tasks.",
            "paper-title": "Morphological Typology in BPE Subword Productivity and Language Modeling",
            "image-path": "flux_paper_image/2410.23656_1730490509.png"
        },

        {
            "startTime": "40:51",
            "arxivId": "2410.23902",
            "arxivLink": "https://arxiv.org/abs/2410.23902",
            "title": "Climate Decisions: AI Gets a Reality Check (and a User Manual)",
            "institute": "Climate Policy Radar",
            "text": "This research introduces a novel evaluation framework specifically tailored for climate-related documents, addressing the limitations of generative AI in this domain. It also includes a human-annotated dataset and automated evaluation tools to facilitate broader adoption and robust assessment of these systems.",
            "paper-title": "Responsible Retrieval Augmented Generation for Climate Decision Making from Documents",
            "image-path": "flux_paper_image/2410.23902_1730490229.png"
        }
    ],
    "stats": {
        "num_pick": 102,
        "num_total": 348,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202411011323_audio.mp3"
}
