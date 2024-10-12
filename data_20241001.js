
daily_data = {
    "date": "2024-10-01",
    "tweets": [
            {
                "startTime": "01:00",
                "arxivId": "2409.20537",
                "arxivLink": "https://arxiv.org/abs/2409.20537",
                "title": "Robots Learn a New Language: Pre-trained Transformers Speak Embodiment!",
                "institute": "MIT, Meta",
                "text": "This research introduces Heterogeneous Pre-trained Transformers (HPT), a novel approach to pre-training robotic policies that leverages data from diverse embodiments, including real robots, simulations, and human videos. Unlike previous methods that often focus on a single embodiment or modality, HPT aligns proprioception and vision inputs from different robots into a shared representation space, enabling generalization across various tasks and environments.",
                "paper-title": "Scaling Proprioceptive-Visual Learning with Heterogeneous Pre-trained Transformers",
                "image-path": "flux_paper_image/2409.20537_1727818644.png"
            },

            {
                "startTime": "01:27",
                "arxivId": "2409.19817",
                "arxivLink": "https://arxiv.org/abs/2409.19817",
                "title": "LLMs Get a Temperature Check: New Method Calibrates Confidence Scores",
                "institute": "Stanford University",
                "text": "This research introduces Adaptive Temperature Scaling (ATS), a post-hoc calibration method that predicts a unique temperature scaling parameter for each token prediction based on the language model's hidden features. This differs from previous methods that apply a single temperature parameter across all outputs, which can lead to miscalibration.",
                "paper-title": "Calibrating Language Models with Adaptive Temperature Scaling",
                "image-path": "flux_paper_image/2409.19817_1727818044.png"
            },

            {
                "startTime": "01:49",
                "arxivId": "2409.20324",
                "arxivLink": "https://arxiv.org/abs/2409.20324",
                "title": "Blind Navigation Gets a Heads-Up: New Dataset Helps Robots See the World Like We Do",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research introduces HEADS-UP, a new dataset specifically designed for trajectory prediction in blind assistance systems. Unlike existing datasets, HEADS-UP captures data from a head-mounted camera, mimicking the perspective of a blind individual.",
                "paper-title": "HEADS-UP: Head-Mounted Egocentric Dataset for Trajectory Prediction in Blind Assistance Systems",
                "image-path": "flux_paper_image/2409.20324_1727818549.png"
            },

            {
                "startTime": "02:11",
                "arxivId": "2409.19913",
                "arxivLink": "https://arxiv.org/abs/2409.19913",
                "title": "LLMs on a Diet: How to Feed Your Giant Language Model the Right Learning Rate",
                "institute": "Microsoft",
                "text": "This research focuses on how the optimal learning rate (LR) for training large language models (LLMs) changes depending on the size of the training dataset, a factor not previously explored in depth.",
                "paper-title": "Scaling Optimal LR Across Token Horizon",
                "image-path": "flux_paper_image/2409.19913_1727915171.png"
            },

            {
                "startTime": "02:28",
                "arxivId": "2409.19157",
                "arxivLink": "https://arxiv.org/abs/2409.19157",
                "title": "Forecasting the Future, Even When It's Trying to Trick You!",
                "institute": "Stanford University, Cornell University",
                "text": "This research introduces a new framework for probabilistic forecasting that guarantees accurate uncertainty estimates, even when the data is changing unpredictably or even being manipulated adversarially. This is different from previous work that often relies on assumptions about the data's stability.",
                "paper-title": "Calibrated Probabilistic Forecasts for Arbitrary Sequences",
                "image-path": "flux_paper_image/2409.19157_1727914930.png"
            },

            {
                "startTime": "02:48",
                "arxivId": "2409.20568",
                "arxivLink": "https://arxiv.org/abs/2409.20568",
                "title": "Robots Learn to Do Chores, No Humans Needed!",
                "institute": "Carnegie Mellon University, AI Institute",
                "text": "This research focuses on enabling robots to learn mobile manipulation skills in real-world environments without extensive human supervision or simulation training. It differs from previous work by incorporating task-relevant autonomy, efficient policy learning using behavior priors, and flexible reward specification.",
                "paper-title": "Continuously Improving Mobile Manipulation with Autonomous Real-World RL",
                "image-path": "flux_paper_image/2409.20568_1727820513.png"
            },

            {
                "startTime": "03:08",
                "arxivId": "2409.19381",
                "arxivLink": "https://arxiv.org/abs/2409.19381",
                "title": "LLMs: Code or Words? MetaMath Knows Best!",
                "institute": "Shanghai Jiao Tong University, Yale University, Google",
                "text": "This research explores the interplay between natural language and code-based reasoning in LLMs for mathematical problem-solving. It introduces MetaMath, a prompting method that dynamically selects the most appropriate reasoning form based on the problem type.",
                "paper-title": "MetaMath: Integrating Natural Language and Code for Enhanced Mathematical Reasoning in Large Language Models",
                "image-path": "flux_paper_image/2409.19381_1727819920.png"
            },

            {
                "startTime": "03:33",
                "arxivId": "2409.19420",
                "arxivLink": "https://arxiv.org/abs/2409.19420",
                "title": "MRI Meets CT: A Love Story in the Latent Space",
                "institute": "Stanford University, University of Hong Kong",
                "text": "This research proposes a data-driven multi-modality imaging (DMI) strategy that utilizes a multi-sensor learning (MSL) framework to synergistically reconstruct images from different modalities. Unlike previous work that focuses on post-hoc fusion of independently reconstructed images, this approach leverages a shared latent space to extract and transfer information across modalities, enabling enhanced image reconstruction.",
                "paper-title": "Multi-sensor Learning Enables Information Transfer across Different Sensory Data and Augments Multi-modality Imaging.",
                "image-path": "flux_paper_image/2409.19420_1727914924.png"
            },

            {
                "startTime": "03:54",
                "arxivId": "2409.19808",
                "arxivLink": "https://arxiv.org/abs/2409.19808",
                "title": "Can Tiny Language Models Learn to Be Creative? A New Study Shows They Can!",
                "institute": "Princeton University",
                "text": "This research explores whether smaller language models can learn to combine different language skills through fine-tuning, even if they haven't seen those combinations during training. This differs from previous work that focused on the relationship between model size and compositional generalization.",
                "paper-title": "Can Models Learn Skill Composition from Examples?",
                "image-path": "flux_paper_image/2409.19808_1727818249.png"
            },

            {
                "startTime": "04:17",
                "arxivId": "2409.19044",
                "arxivLink": "https://arxiv.org/abs/2409.19044",
                "title": "Stacking the Middle: A New Trick for Smarter Language Models",
                "institute": "Google",
                "text": "This research explores the inductive bias of stacking, a training strategy for language models, by proposing a novel variant called MIDAS. Unlike previous stacking methods that duplicate the last layers of a smaller model, MIDAS replicates the middle layers, leading to improved reasoning abilities in downstream tasks.",
                "paper-title": "On the Inductive Bias of Stacking Towards Improving Reasoning",
                "image-path": "flux_paper_image/2409.19044_1727915294.png"
            },

            {
                "startTime": "04:38",
                "arxivId": "2409.20325",
                "arxivLink": "https://arxiv.org/abs/2409.20325",
                "title": "Deep Learning Optimizers: It's All About the Norm, Dude!",
                "institute": "MIT",
                "text": "This paper reinterprets popular deep learning optimizers like Adam, Shampoo, and Prodigy as first-order methods, demonstrating that they can be understood as variations of steepest descent under specific norms. This approach differs from previous work that often framed these optimizers within convex or approximate second-order theory.",
                "paper-title": "Old Optimizer, New Norm: An Anthology",
                "image-path": "flux_paper_image/2409.20325_1727915323.png"
            },

            {
                "startTime": "04:58",
                "arxivId": "2409.19567",
                "arxivLink": "https://arxiv.org/abs/2409.19567",
                "title": "Zeroth-Order Optimization: A Gradient-Free Dance with Variance Reduction!",
                "institute": "Peking University",
                "text": "This research proposes a novel variance-reduced gradient estimator for distributed zeroth-order optimization, addressing the trade-off between convergence rate and sampling cost per gradient estimation. Unlike previous work, this estimator leverages historical snapshots for variance correction, achieving a scalable sampling number independent of the problem dimension.",
                "paper-title": "Variance-Reduced Gradient Estimator for Nonconvex Zeroth-Order Distributed Optimization",
                "image-path": "flux_paper_image/2409.19567_1727914844.png"
            },

            {
                "startTime": "05:18",
                "arxivId": "2409.19345",
                "arxivLink": "https://arxiv.org/abs/2409.19345",
                "title": "Transformers Overfitting? No Problem! New Study Reveals Benign Overfitting in Vision",
                "institute": "RIKEN, Harbin Institute of Technology, University of Tokyo",
                "text": "This research delves into the generalization capabilities of Vision Transformers (ViTs) when trained to overfit training data. Unlike previous work that often focused on simplified settings or unrealistic loss functions, this study analyzes a two-layer ViT with softmax attention under gradient descent, providing a more realistic and comprehensive analysis.",
                "paper-title": "Unveil Benign Overfitting for Transformer in Vision: Training Dynamics, Convergence, and Generalization",
                "image-path": "flux_paper_image/2409.19345_1727915276.png"
            },

            {
                "startTime": "05:53",
                "arxivId": "2409.20326",
                "arxivLink": "https://arxiv.org/abs/2409.20326",
                "title": "Soccer Bots Learn to Play Like a Team, Not Just Kick the Ball!",
                "institute": "ETH Zurich",
                "text": "This research introduces MARLadona, a multi-agent reinforcement learning framework that trains soccer agents to exhibit sophisticated team play. Unlike previous work that often focused on individual skills or simplified 2D environments, MARLadona utilizes a 3D physics-based environment and a modified global entity encoder architecture to achieve effective team play in games with up to 11v11 agents.",
                "paper-title": "MARLadona -- Towards Cooperative Team Play Using Multi-Agent Reinforcement Learning",
                "image-path": "flux_paper_image/2409.20326_1727819597.png"
            },

            {
                "startTime": "06:16",
                "arxivId": "2409.19508",
                "arxivLink": "https://arxiv.org/abs/2409.19508",
                "title": "LLMs: Beyond Code, Into the Wild!",
                "institute": "TU Darmstadt, IBM Research Europe, National Research Council Canada",
                "text": "This research goes beyond analyzing the impact of LLMs within computer science and explores their influence on 22 diverse fields outside of it. It quantifies the degree to which these fields are citing LLMs and analyzes their usage patterns.",
                "paper-title": "Transforming Scholarly Landscapes: Influence of Large Language Models on Academic Fields beyond Computer Science",
                "image-path": "flux_paper_image/2409.19508_1727915568.png"
            },

            {
                "startTime": "06:38",
                "arxivId": "2409.19505",
                "arxivLink": "https://arxiv.org/abs/2409.19505",
                "title": "NLP Papers: A Peek Inside the Mind of a Researcher",
                "institute": "IBM, National Research Council Canada, TU Darmstadt",
                "text": "This research analyzes the contribution statements in NLP papers to understand the evolution of the field. Unlike previous work that focused on metadata or citation analysis, this study delves into the content of the papers themselves.",
                "paper-title": "The Nature of NLP: Analyzing Contributions in NLP Papers",
                "image-path": "flux_paper_image/2409.19505_1727819365.png"
            },

            {
                "startTime": "07:02",
                "arxivId": "2409.20553",
                "arxivLink": "https://arxiv.org/abs/2409.20553",
                "title": "Chess Engine Learns to Think Like a Human, Even When You're Not a Grandmaster!",
                "institute": "University of Toronto, Harvard University, Cornell University...",
                "text": "This research introduces a unified model for human-AI alignment in chess, unlike previous work that used separate models for different skill levels. The new model uses a skill-aware attention mechanism to dynamically integrate player strengths with encoded chess positions, enabling it to be sensitive to evolving player skill.",
                "paper-title": "Maia-2: A Unified Model for Human-AI Alignment in Chess",
                "image-path": "flux_paper_image/2409.20553_1727915739.png"
            },

            {
                "startTime": "07:24",
                "arxivId": "2409.19134",
                "arxivLink": "https://arxiv.org/abs/2409.19134",
                "title": "Secret Prompts: How to Chat with AI Without Spilling Your Secrets",
                "institute": "Yale University",
                "text": "This research introduces a new approach to confidential prompting for large language models (LLMs) using confidential computing. Unlike previous methods that rely on differential privacy or multi-party computation, this approach leverages confidential virtual machines (CVMs) to isolate user prompts while allowing efficient token generation.",
                "paper-title": "Confidential Prompting: Protecting User Prompts from Cloud LLM Providers",
                "image-path": "flux_paper_image/2409.19134_1727819567.png"
            },

            {
                "startTime": "07:45",
                "arxivId": "2409.19801",
                "arxivLink": "https://arxiv.org/abs/2409.19801",
                "title": "Code Review's New BFF: A Reference-Free Metric for Judging Reviews",
                "institute": "CMU",
                "text": "This research proposes a reference-free metric called CRScore to evaluate code review comments. Unlike previous methods that rely on comparing generated reviews to human-written references, CRScore focuses on assessing the quality of reviews based on their comprehensiveness, conciseness, and relevance to the code changes.",
                "paper-title": "CRScore: Grounding Automated Evaluation of Code Review Comments in Code Claims and Smells",
                "image-path": "flux_paper_image/2409.19801_1727819035.png"
            },

            {
                "startTime": "08:05",
                "arxivId": "2409.19430",
                "arxivLink": "https://arxiv.org/abs/2409.19430",
                "title": "LLMs: Interviewing the Bots, Not the People?",
                "institute": "CMU",
                "text": "This research explores the use of large language models (LLMs) as simulated participants in qualitative research, focusing on semi-structured interviews. It goes beyond previous work by examining the perspectives of qualitative researchers themselves, rather than solely evaluating the technical capabilities of LLMs.",
                "paper-title": "'Simulacrum of Stories': Examining Large Language Models as Qualitative Research Participants",
                "image-path": "flux_paper_image/2409.19430_1727914782.png"
            },

            {
                "startTime": "08:25",
                "arxivId": "2409.19613",
                "arxivLink": "https://arxiv.org/abs/2409.19613",
                "title": "Mamba's Got a New Trick: Hybrid Mamba for Few-Shot Segmentation",
                "institute": "Nanyang Technological University, Peking University, Singapore University of Technology and Design...",
                "text": "This paper introduces a new approach to few-shot segmentation using a hybrid Mamba network. Unlike previous methods that rely on cross-attention, which has quadratic complexity, this approach utilizes Mamba, a model with linear complexity, to capture inter-sequence dependencies between support and query features.",
                "paper-title": "Hybrid Mamba for Few-Shot Segmentation",
                "image-path": "flux_paper_image/2409.19613_1727820313.png"
            },

            {
                "startTime": "08:58",
                "arxivId": "2409.20534",
                "arxivLink": "https://arxiv.org/abs/2409.20534",
                "title": "Conformal Calibration: Making AI Decisions More Robust, One Uncertainty Set at a Time!",
                "institute": "Caltech",
                "text": "This research proposes an end-to-end framework for training machine learning models that incorporate uncertainty estimates into decision-making under uncertainty. Unlike previous work, this approach uses conformal prediction to guarantee the quality of uncertainty estimates and trains the model with feedback from the downstream decision-making objective.",
                "paper-title": "End-to-End Conformal Calibration for Optimization Under Uncertainty",
                "image-path": "flux_paper_image/2409.20534_1727819309.png"
            },

            {
                "startTime": "09:25",
                "arxivId": "2409.20562",
                "arxivLink": "https://arxiv.org/abs/2409.20562",
                "title": "Meshing Madness: A Continuous Representation for Learning Manifold Surface Meshes",
                "institute": "NVIDIA, University of Toronto, Vector Institute...",
                "text": "This paper introduces SpaceMesh, a continuous representation for meshes that guarantees manifold output and supports complex polygonal connectivity. Unlike previous methods that rely on indirect representations or struggle with complex topologies, SpaceMesh directly generates meshes as the output of a neural network.",
                "paper-title": "SpaceMesh: A Continuous Representation for Learning Manifold Surface Meshes",
                "image-path": "flux_paper_image/2409.20562_1727819249.png"
            },

            {
                "startTime": "09:39",
                "arxivId": "2409.20550",
                "arxivLink": "https://arxiv.org/abs/2409.20550",
                "title": "LLMs Gone Wild: Unmasking the Hallucinations in Code Generation",
                "institute": "Sun Yat-sen University, Nanyang Technological University",
                "text": "This research focuses on hallucinations in code generation within a repository-level context, unlike previous studies that primarily analyzed standalone function generation.",
                "paper-title": "LLM Hallucinations in Practical Code Generation: Phenomena, Mechanism, and Mitigation",
                "image-path": "flux_paper_image/2409.20550_1727820396.png"
            },

            {
                "startTime": "09:57",
                "arxivId": "2409.19150",
                "arxivLink": "https://arxiv.org/abs/2409.19150",
                "title": "Decision Trees: Not Just for Tables Anymore!",
                "institute": "MIT, Texas A&M University",
                "text": "This paper explores the use of Auto-regressive Decision Trees (ARDTs) for language modeling, a novel application of this traditional machine learning technique. Unlike previous work that focused on time-series prediction, this research investigates the theoretical and practical capabilities of ARDTs in generating coherent text and performing reasoning tasks.",
                "paper-title": "On the Power of Decision Trees in Auto-Regressive Language Modeling",
                "image-path": "flux_paper_image/2409.19150_1727915330.png"
            },

            {
                "startTime": "10:23",
                "arxivId": "2409.20370",
                "arxivLink": "https://arxiv.org/abs/2409.20370",
                "title": "RLHF's New BFF: Mixture of Judges for Multi-Task LLMs",
                "institute": "Meta",
                "text": "This research introduces a novel framework called Constrained Generative Policy Optimization (CGPO) for fine-tuning large language models (LLMs) in multi-task learning (MTL) settings. Unlike previous approaches that rely on linear combinations of reward models, CGPO utilizes a mixture of judges (MoJs) to identify and mitigate reward hacking behaviors while optimizing for multiple, potentially conflicting objectives.",
                "paper-title": "The Perfect Blend: Redefining RLHF with Mixture of Judges",
                "image-path": "flux_paper_image/2409.20370_1727819636.png"
            },

            {
                "startTime": "10:49",
                "arxivId": "2409.20140",
                "arxivLink": "https://arxiv.org/abs/2409.20140",
                "title": "Shiny Objects, Relighted: A Neural Network Makes Inverse Rendering Glow!",
                "institute": "ETH Zurich, University of T\u00fcbingen",
                "text": "This research introduces a novel information-sharing network structure to jointly learn the radiance field and physically based factorization of a scene, enabling high-quality relighting of glossy objects. This approach differs from previous methods that primarily focused on geometry reconstruction and lacked the ability to accurately estimate material properties and relighting.",
                "paper-title": "RISE-SDF: a Relightable Information-Shared Signed Distance Field for Glossy Object Inverse Rendering",
                "image-path": "flux_paper_image/2409.20140_1727818332.png"
            },

            {
                "startTime": "11:13",
                "arxivId": "2409.19791",
                "arxivLink": "https://arxiv.org/abs/2409.19791",
                "title": "Gradient Descent Goes Fourth: Adaptive Stepsize Makes Optimization Linear!",
                "institute": "University of Pennsylvania, University of Washington, Georgia Institute of Technology",
                "text": "This research challenges the common belief that gradient descent requires a function to grow quadratically to achieve linear convergence. It shows that adaptive stepsize gradient descent can achieve nearly linear convergence for functions with fourth-order growth. The key idea is the introduction of a \"ravine\" manifold, which allows for a decomposition of the function into tangent and normal parts, enabling the algorithm to take advantage of the function's growth properties.",
                "paper-title": "Gradient descent with adaptive stepsize converges (nearly) linearly under fourth-order growth",
                "image-path": "flux_paper_image/2409.19791_1727819356.png"
            },

            {
                "startTime": "11:38",
                "arxivId": "2409.20557",
                "arxivLink": "https://arxiv.org/abs/2409.20557",
                "title": "LLMs: The New Recipe for Video-Based Planning?",
                "institute": "FAIR Meta, UNCChapelHill",
                "text": "This research proposes VidAssist, a framework that uses large language models (LLMs) for goal-oriented planning in instructional videos. Unlike previous work that relies on extensive training data, VidAssist leverages LLMs' inherent knowledge and reasoning capabilities to achieve zero-shot and few-shot learning.",
                "paper-title": "Propose, Assess, Search: Harnessing LLMs for Goal-Oriented Planning in Instructional Videos",
                "image-path": "flux_paper_image/2409.20557_1727915837.png"
            },

            {
                "startTime": "12:04",
                "arxivId": "2409.20043",
                "arxivLink": "https://arxiv.org/abs/2409.20043",
                "title": "One-Point-One NeRF: Giving Neural Rendering a Personal Touch!",
                "institute": "Tsinghua University",
                "text": "This paper introduces OPONeRF, a framework that personalizes neural rendering parameters for each sampled point in a scene. This differs from previous methods that use a single set of parameters for the entire scene, making OPONeRF more adaptable to local variations and test-time scene changes.",
                "paper-title": "OPONeRF: One-Point-One NeRF for Robust Neural Rendering",
                "image-path": "flux_paper_image/2409.20043_1727915723.png"
            },

            {
                "startTime": "12:28",
                "arxivId": "2409.19838",
                "arxivLink": "https://arxiv.org/abs/2409.19838",
                "title": "Pretrained GNNs: The New Feature-Finding Superheroes for Molecular Dynamics!",
                "institute": "University of Chicago",
                "text": "This research introduces geom2vec, a method that uses pretrained graph neural networks (GNNs) to learn transferable representations of molecular geometries. This differs from previous work by decoupling GNN training from training for downstream tasks, allowing for analysis of larger molecular graphs with limited computational resources.",
                "paper-title": "geom2vec: pretrained GNNs as geometric featurizers for conformational dynamics",
                "image-path": "flux_paper_image/2409.19838_1727915516.png"
            },

            {
                "startTime": "12:51",
                "arxivId": "2409.18968",
                "arxivLink": "https://arxiv.org/abs/2409.18968",
                "title": "AI in Medicine: A Safety Checkup for the Future of Healthcare",
                "institute": "University of Cambridge, National University of Singapore",
                "text": "This research goes beyond simply highlighting the potential of AI in medicine. It delves into the specific safety challenges that arise when using AI in real-world healthcare settings, particularly focusing on the reliability and alignment of AI systems with human values.",
                "paper-title": "Safety challenges of AI in medicine",
                "image-path": "flux_paper_image/2409.18968_1727820376.png"
            },

            {
                "startTime": "13:14",
                "arxivId": "2409.19829",
                "arxivLink": "https://arxiv.org/abs/2409.19829",
                "title": "Robots on a Mission: Decentralized Learning for Unlabeled Motion Planning",
                "institute": "Stanford University",
                "text": "This research proposes a decentralized approach to unlabeled motion planning using a Graph Neural Network (GNN) trained with imitation and reinforcement learning. Unlike previous centralized methods, this approach allows robots to coordinate their movements with limited communication and information about the environment.",
                "paper-title": "Generalizability of Graph Neural Networks for Decentralized Unlabeled Motion Planning",
                "image-path": "flux_paper_image/2409.19829_1727818573.png"
            },

            {
                "startTime": "13:34",
                "arxivId": "2409.19583",
                "arxivLink": "https://arxiv.org/abs/2409.19583",
                "title": "Brain Tumor Detection: A Deep Learning Model That's Not Just a Pretty Face!",
                "institute": "Carnegie Mellon University, Northeastern University, University of Maryland",
                "text": "This research focuses on developing a convolutional neural network (CNN) specifically designed for brain tumor detection in MRI images, rather than relying on pre-trained models from other domains.",
                "paper-title": "Brain Tumor Classification on MRI in Light of Molecular Markers",
                "image-path": "flux_paper_image/2409.19583_1727820402.png"
            },

            {
                "startTime": "13:55",
                "arxivId": "2409.19835",
                "arxivLink": "https://arxiv.org/abs/2409.19835",
                "title": "Land Surface Temperature: Downscaling Done Right (and Open Source!)",
                "institute": "Nanjing University of Science and Technology, University College London, Nankai University",
                "text": "This research introduces a new deep learning architecture called MoCoLSK-Net for land surface temperature (LST) downscaling. Unlike previous methods, MoCoLSK-Net dynamically adjusts its receptive field based on the input data, allowing it to capture more intricate details and improve accuracy. It also incorporates a modality-conditioned weight generation pathway, enabling more effective multi-modal fusion.",
                "paper-title": "GrokLST: Towards High-Resolution Benchmark and Toolkit for Land Surface Temperature Downscaling",
                "image-path": "flux_paper_image/2409.19835_1727915563.png"
            },

            {
                "startTime": "14:23",
                "arxivId": "2409.19435",
                "arxivLink": "https://arxiv.org/abs/2409.19435",
                "title": "SBI Just Got Easier: A New Python Package Makes Bayesian Inference a Breeze",
                "institute": "ETH Zurich, Swiss Data Science Center, Zurich University of Applied Sciences...",
                "text": "This research introduces sbijax, a Python package that implements a wide variety of state-of-the-art methods in neural simulation-based inference (SBI). Unlike existing packages, sbijax offers functionality for recent developments in the field, such as flow matching posterior estimation (FMPE) and contrastive neural ratio estimation (NRE).",
                "paper-title": "Simulation-based inference with the Python Package sbijax",
                "image-path": "flux_paper_image/2409.19435_1727820355.png"
            },

            {
                "startTime": "14:53",
                "arxivId": "2409.19359",
                "arxivLink": "https://arxiv.org/abs/2409.19359",
                "title": "Quantum Learning Goes Undercover: Encrypted Data, Secret Computations!",
                "institute": "Tsinghua University, Hefei National Laboratory, Shanghai Qi Zhi Institute",
                "text": "This paper proposes a framework for quantum delegated and federated learning that uses quantum homomorphic encryption to protect data privacy. Unlike previous work that relies on blind quantum computing, this approach allows the server to perform computations on encrypted data without extracting any information about the data itself.",
                "paper-title": "Quantum delegated and federated learning via quantum homomorphic encryption",
                "image-path": "flux_paper_image/2409.19359_1727817940.png"
            },

            {
                "startTime": "15:19",
                "arxivId": "2409.19702",
                "arxivLink": "https://arxiv.org/abs/2409.19702",
                "title": "Relighting Fluffy Friends: New Tech Makes 3D Fur Look Fantastic!",
                "institute": "Nanjing University of Science and Technology, Nanjing University, Adobe",
                "text": "This paper introduces a new way to represent 3D objects, called \"Relightable Neural Gaussians\" (Rng), which uses Gaussian splatting to represent both hard surfaces and fluffy shapes. Unlike previous methods that rely on surface constraints or analytical shading models, Rng avoids these assumptions, enabling more flexible and efficient relighting.",
                "paper-title": "RNG: Relightable Neural Gaussians",
                "image-path": "flux_paper_image/2409.19702_1727915710.png"
            },

            {
                "startTime": "15:50",
                "arxivId": "2409.19949",
                "arxivLink": "https://arxiv.org/abs/2409.19949",
                "title": "Diffusion Models Learn From Mistakes: A New Way to Train AI Planners",
                "institute": "Northwestern Polytechnical University, China Telecom, Tsinghua University...",
                "text": "This research proposes a new method for training diffusion models to act as planners. Unlike previous methods that rely on expert demonstrations or reward labels, this approach leverages large amounts of sub-optimal data, which is more readily available in real-world scenarios.",
                "paper-title": "Task-agnostic Pre-training and Task-guided Fine-tuning for Versatile Diffusion Planner",
                "image-path": "flux_paper_image/2409.19949_1727818852.png"
            },

            {
                "startTime": "16:14",
                "arxivId": "2409.20247",
                "arxivLink": "https://arxiv.org/abs/2409.20247",
                "title": "LLMs on the Go: Sharing the Training Load for Stable AI on Mobile Devices",
                "institute": "Nanyang Technological University",
                "text": "This research proposes a collaborative training framework for LLMs that leverages the combined computational power of mobile users and edge servers. This approach differs from previous work by incorporating model stability considerations into the optimization objectives, aiming to reduce performance variance across training instances.",
                "paper-title": "Resource Allocation for Stable LLM Training in Mobile Edge Computing",
                "image-path": "flux_paper_image/2409.20247_1727819008.png"
            },

            {
                "startTime": "16:37",
                "arxivId": "2409.20098",
                "arxivLink": "https://arxiv.org/abs/2409.20098",
                "title": "Facial Expressions: Beyond the Basics, AI Learns to Decode the Nuances!",
                "institute": "China University of Geosciences University of Cambridge Baidu Inc La Trobe University",
                "text": "This research introduces a new task called Facial Expression Category Discovery (FECD) for open-world facial expression recognition (O-FER). Unlike previous O-FER methods that only detect new expressions, FECD aims to simultaneously recognize known expressions and discover new ones. The paper addresses the challenges of theoretical bias (introduced by new categories in unlabeled data) and practical bias (arising from fine-grained and imbalanced facial expression data) by proposing a novel adversarial debiasing framework called FER-GCD.",
                "paper-title": "Learning to Discover Generalized Facial Expressions",
                "image-path": "flux_paper_image/2409.20098_1727818401.png"
            },

            {
                "startTime": "17:04",
                "arxivId": "2409.19993",
                "arxivLink": "https://arxiv.org/abs/2409.19993",
                "title": "LLMs: Backdoor Threats and How to Defend Them",
                "institute": "UC Davis, Nvidia, University of Southern California...",
                "text": "This research provides a comprehensive survey of backdoor threats to LLMs, covering both training-time and inference-time attacks, as well as defense and detection strategies. It also highlights key challenges in addressing these threats, which is a unique aspect compared to previous work.",
                "paper-title": "Mitigating Backdoor Threats to Large Language Models: Advancement and Challenges",
                "image-path": "flux_paper_image/2409.19993_1727817826.png"
            },

            {
                "startTime": "17:28",
                "arxivId": "2409.19796",
                "arxivLink": "https://arxiv.org/abs/2409.19796",
                "title": "EMR Segmentation: A Black Box Solution for Healthcare's Textual Chaos!",
                "institute": "Tsinghua University",
                "text": "This research focuses on the automatic segmentation of Electronic Medical Records (EMRs) using a novel black-box approach. Unlike previous methods that rely on complex rules or pre-trained language models, this study proposes a simpler sentence embedding technique combined with a neural network for accurate sectioning.",
                "paper-title": "Black-Box Segmentation of Electronic Medical Records",
                "image-path": "flux_paper_image/2409.19796_1727818268.png"
            },

            {
                "startTime": "17:50",
                "arxivId": "2409.20089",
                "arxivLink": "https://arxiv.org/abs/2409.20089",
                "title": "LLMs: Jailbreaking? Not So Fast! New Defense Makes 'em Say \"No!\"",
                "institute": "University of Toronto, Meta",
                "text": "This research identifies a specific feature in LLMs called the \"refusal feature\" that plays a key role in how models decide to answer harmful requests. The study shows that adversarial attacks often target this feature, effectively \"disabling\" the model's safety mechanisms. The authors propose a new training method called ReFAT that specifically addresses this vulnerability by simulating the effect of these attacks during training.",
                "paper-title": "Robust LLM safeguarding via refusal feature adversarial training",
                "image-path": "flux_paper_image/2409.20089_1727820002.png"
            },

            {
                "startTime": "18:13",
                "arxivId": "2409.19824",
                "arxivLink": "https://arxiv.org/abs/2409.19824",
                "title": "Ranking Ads: A Domain-Adapted Reward Model for Offline Evaluation",
                "institute": "Meta, Duke University",
                "text": "This research proposes a domain-adapted reward model for offline evaluation of ranking models in large-scale ad recommendation systems. Unlike traditional methods like Inverse Propensity Scoring (IPS), this approach eliminates the need to account for the complexity of the ad system by leveraging an offline A/B testing simulator.",
                "paper-title": "Counterfactual Evaluation of Ads Ranking Models through Domain Adaptation",
                "image-path": "flux_paper_image/2409.19824_1727820430.png"
            },

            {
                "startTime": "18:34",
                "arxivId": "2409.19811",
                "arxivLink": "https://arxiv.org/abs/2409.19811",
                "title": "SfM Gets a Line: Hybrid Features Make 3D Reconstruction More Robust",
                "institute": "ETH Zurich, Microsoft, Lund University",
                "text": "This research introduces an incremental Structure-from-Motion (SfM) system that incorporates lines and vanishing points alongside traditional point features. This approach improves the robustness and accuracy of 3D reconstruction, especially in challenging scenarios with limited texture.",
                "paper-title": "Robust Incremental Structure-from-Motion with Hybrid Features",
                "image-path": "flux_paper_image/2409.19811_1727915315.png"
            },

            {
                "startTime": "18:58",
                "arxivId": "2409.19690",
                "arxivLink": "https://arxiv.org/abs/2409.19690",
                "title": "Neural-Polyptych: Turning Sketches into Masterpieces, One Patch at a Time!",
                "institute": "Peking University, Microsoft",
                "text": "This research introduces a novel approach to painting recreation by combining interactive sketches with fragments from original paintings. Unlike previous methods that focus on specific attributes or rely on large datasets, this framework leverages a multi-scale GAN architecture and a Correspondence Attention module to generate high-resolution, content-controllable paintings.",
                "paper-title": "Neural-Polyptych: Content Controllable Painting Recreation for Diverse Genres",
                "image-path": "flux_paper_image/2409.19690_1727915448.png"
            },

            {
                "startTime": "19:23",
                "arxivId": "2409.19028",
                "arxivLink": "https://arxiv.org/abs/2409.19028",
                "title": "LLMs: Quantum Code Whisperers?",
                "institute": "University of L\u2019Aquila, King\u2019s College London, University College London...",
                "text": "This research explores the use of large language models (LLMs) to generate explanations for quantum algorithms, a novel application of LLMs in the field of quantum computing.",
                "paper-title": "Exploring LLM-Driven Explanations for Quantum Algorithms",
                "image-path": "flux_paper_image/2409.19028_1727914936.png"
            },

            {
                "startTime": "19:43",
                "arxivId": "2409.19790",
                "arxivLink": "https://arxiv.org/abs/2409.19790",
                "title": "Riemann Hypothesis: Can AI Crack the Code of Prime Numbers?",
                "institute": "MIT",
                "text": "This research proposes a novel framework for analyzing the Riemann Hypothesis using probabilistic modeling with cross-entropy optimization and reasoning. This approach differs from previous work by incorporating random sampling of Riemann Zeta function values and updating probability distributions based on performance metrics.",
                "paper-title": "Analysis on Riemann Hypothesis with Cross Entropy Optimization and Reasoning",
                "image-path": "flux_paper_image/2409.19790_1727820133.png"
            },

            {
                "startTime": "20:04",
                "arxivId": "2409.19798",
                "arxivLink": "https://arxiv.org/abs/2409.19798",
                "title": "Membership Inference Attacks: Can't Prove You Trained on My Data!",
                "institute": "ETH Zurich",
                "text": "This paper challenges the common assumption that membership inference attacks can reliably prove a model was trained on specific data. It argues that these attacks are fundamentally flawed because it's impossible to accurately estimate their false positive rate.",
                "paper-title": "Membership Inference Attacks Cannot Prove that a Model Was Trained On Your Data",
                "image-path": "flux_paper_image/2409.19798_1727915504.png"
            },

            {
                "startTime": "20:27",
                "arxivId": "2409.20288",
                "arxivLink": "https://arxiv.org/abs/2409.20288",
                "title": "LexEval: Testing AI Lawyers on China's Legal Exams!",
                "institute": "Tsinghua University",
                "text": "This research introduces LexEval, a comprehensive benchmark for evaluating large language models (LLMs) in the Chinese legal domain. Unlike previous benchmarks, LexEval focuses on practical legal applications and includes a taxonomy of legal cognitive abilities, encompassing tasks like legal concept memorization, understanding, logic inference, discrimination, generation, and ethics.",
                "paper-title": "LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models",
                "image-path": "flux_paper_image/2409.20288_1727819528.png"
            },

            {
                "startTime": "20:47",
                "arxivId": "2409.19575",
                "arxivLink": "https://arxiv.org/abs/2409.19575",
                "title": "Speech vs. Lips: Who's Got the Most Info?",
                "institute": "Tsinghua University, Beijing University of Posts and Telecommunications",
                "text": "This research uses information theory to quantify the amount of information shared between audio, video, and text in audio-visual speech processing tasks. This approach differs from previous work that primarily focused on qualitative analysis.",
                "paper-title": "Quantitative Analysis of Audio-Visual Tasks: An Information-Theoretic Perspective",
                "image-path": "flux_paper_image/2409.19575_1727818785.png"
            },

            {
                "startTime": "21:07",
                "arxivId": "2409.19667",
                "arxivLink": "https://arxiv.org/abs/2409.19667",
                "title": "Can LLMs Code Like Pros? New Benchmark Tests Graph Analysis Skills",
                "institute": "Tsinghua University, Beijing University of Posts and Telecommunications",
                "text": "This research introduces ProGraph, a benchmark that evaluates large language models' (LLMs) ability to analyze graphs by writing code using external APIs, unlike previous benchmarks that focused on direct reasoning over graph descriptions.",
                "paper-title": "Can Large Language Models Analyze Graphs like Professionals? A Benchmark, Datasets and Models",
                "image-path": "flux_paper_image/2409.19667_1727818383.png"
            },

            {
                "startTime": "21:31",
                "arxivId": "2409.20449",
                "arxivLink": "https://arxiv.org/abs/2409.20449",
                "title": "Teacher's Pet: Linear Projections Make Tiny Models Learn Like Big Ones!",
                "institute": "Google, MIT, University of Michigan",
                "text": "This paper introduces a new method called Learning Embedding Linear Projections (LELP) for knowledge distillation. Unlike previous methods that focus on mimicking the teacher's output probabilities or internal representations, LELP extracts information from the teacher's embedding layer by identifying informative linear subspaces and splitting them into pseudo-subclasses. The student model is then trained on these pseudo-subclasses, improving performance in binary and few-class classification tasks.",
                "paper-title": "Linear Projections of Teacher Embeddings for Few-Class Distillation",
                "image-path": "flux_paper_image/2409.20449_1727914825.png"
            },

            {
                "startTime": "22:01",
                "arxivId": "2409.19022",
                "arxivLink": "https://arxiv.org/abs/2409.19022",
                "title": "AI vs. Scammers: A Deep Dive into Online Fraud Detection",
                "institute": "University College London",
                "text": "This systematic literature review focuses on AI-based models that analyze textual data to detect online fraud, a unique focus compared to previous reviews that often concentrate on specific scam types.",
                "paper-title": "Application of AI-based Models for Online Fraud Detection and Analysis",
                "image-path": "flux_paper_image/2409.19022_1727820216.png"
            },

            {
                "startTime": "22:23",
                "arxivId": "2409.19747",
                "arxivLink": "https://arxiv.org/abs/2409.19747",
                "title": "Charts Talking: A New Language for Data Storytelling",
                "institute": "York University",
                "text": "This research provides a comprehensive survey of Natural Language Generation (NLG) for visualizations, focusing on text generation for visualizations and introducing a taxonomy of the problem. It differs from previous work by systematically reviewing the state of the art on NLG for visualizations and introducing a taxonomy of the problem.",
                "paper-title": "Natural Language Generation for Visualizations: State of the Art, Challenges and Future Directions",
                "image-path": "flux_paper_image/2409.19747_1727818443.png"
            },

            {
                "startTime": "22:40",
                "arxivId": "2409.19569",
                "arxivLink": "https://arxiv.org/abs/2409.19569",
                "title": "Image Segmentation: A Love Story Between Words and Pixels",
                "institute": "Tsinghua University",
                "text": "This research introduces four explicit interaction principles for aligning visual and textual information in referring image segmentation. Unlike previous methods that often rely on single-modal mask decoders, this paper proposes a Fully Aligned Network (FAN) that utilizes a multi-modal common space for improved segmentation accuracy.",
                "paper-title": "Fully Aligned Network for Referring Image Segmentation",
                "image-path": "flux_paper_image/2409.19569_1727820099.png"
            },

            {
                "startTime": "23:00",
                "arxivId": "2409.19024",
                "arxivLink": "https://arxiv.org/abs/2409.19024",
                "title": "Elephant in the Room: Reward Models Are the Real MVPs in AI Alignment",
                "institute": "Hong Kong University of Science and Technology, Peking University, Microsoft...",
                "text": "This research focuses on the impact of reward model quality on AI alignment, a crucial aspect often overlooked in previous studies. Unlike prior work that primarily focused on alignment algorithms, this paper systematically investigates the performance of various reward models and their influence on alignment outcomes.",
                "paper-title": "Elephant in the Room: Unveiling the Impact of Reward Model Quality in Alignment",
                "image-path": "flux_paper_image/2409.19024_1727819024.png"
            },

            {
                "startTime": "23:27",
                "arxivId": "2409.20012",
                "arxivLink": "https://arxiv.org/abs/2409.20012",
                "title": "Sentiment Analysis with Missing Data: A Language-Dominated Approach",
                "institute": "Chinese University of Hong Kong, University College London, Wuhan University",
                "text": "This research focuses on multimodal sentiment analysis with incomplete data, proposing a Language-dominated Noise-resistant Learning Network (LNLN) that prioritizes the language modality for robust sentiment prediction. Unlike previous work, LNLN incorporates a Dominant Modality Correction (DMC) module to enhance the quality of language features, even when data is missing.",
                "paper-title": "Towards Robust Multimodal Sentiment Analysis with Incomplete Data",
                "image-path": "flux_paper_image/2409.20012_1727914892.png"
            },

            {
                "startTime": "23:49",
                "arxivId": "2409.19951",
                "arxivLink": "https://arxiv.org/abs/2409.19951",
                "title": "LLMs: The Weakest Link Holds Back the Chain!",
                "institute": "Meta",
                "text": "This research focuses on evaluating the performance of Large Language Models (LLMs) across multiple capabilities, rather than just individual skills. It introduces a new benchmark, CrossEval, to assess how well LLMs handle tasks that require combining different abilities.",
                "paper-title": "Law of the Weakest Link: Cross Capabilities of Large Language Models",
                "image-path": "flux_paper_image/2409.19951_1727818019.png"
            },

            {
                "startTime": "24:14",
                "arxivId": "2409.19523",
                "arxivLink": "https://arxiv.org/abs/2409.19523",
                "title": "LLMs for Translation: A Neuron-Specific Approach to Fine-Tuning",
                "institute": "Tianjin University, Tsinghua University",
                "text": "This research proposes a novel method for selectively fine-tuning LLMs for machine translation by identifying and routing language-aware neurons. Unlike previous approaches that focus on full-parameter finetuning, this method aims to mitigate catastrophic forgetting and parameter interference by updating only the parameters of relevant neurons.",
                "paper-title": "LANDeRMT: Detecting and Routing Language-Aware Neurons for Selectively Finetuning LLMs to Machine Translation",
                "image-path": "flux_paper_image/2409.19523_1727817947.png"
            },

            {
                "startTime": "24:35",
                "arxivId": "2409.18974",
                "arxivLink": "https://arxiv.org/abs/2409.18974",
                "title": "Neural Warp Composition: A Flow-Based Trick for Faster Rendering",
                "institute": "McGill University, Adobe Research",
                "text": "This paper proposes a new method for importance sampling in rendering by composing two neural warps: a conditional head warp and an unconditional tail warp. This approach differs from previous work by separating the complexity and conditioning of the target distribution, leading to a more efficient and accurate sampling process.",
                "paper-title": "Neural Product Importance Sampling via Warp Composition",
                "image-path": "flux_paper_image/2409.18974_1727915140.png"
            },

            {
                "startTime": "24:53",
                "arxivId": "2409.19884",
                "arxivLink": "https://arxiv.org/abs/2409.19884",
                "title": "EEG-Based Attention Decoding: A Short-Window CNN and Mamba Make a Match!",
                "institute": "Tsinghua University",
                "text": "This research proposes a novel model called SWIM, which combines a short-window convolutional neural network (SWCNN) with a sequence model called Mamba. This approach aims to improve the decoding of auditory spatial attention from EEG signals by leveraging both short-term and long-term information.",
                "paper-title": "SWIM: Short-Window CNN Integrated with Mamba for EEG-Based Auditory Spatial Attention Decoding",
                "image-path": "flux_paper_image/2409.19884_1727915658.png"
            },

            {
                "startTime": "25:18",
                "arxivId": "2409.19149",
                "arxivLink": "https://arxiv.org/abs/2409.19149",
                "title": "AI's New Trick: Text-to-Image Models Can Be Tricked Into Generating Unsafe Content",
                "institute": "University of Oxford",
                "text": "This research introduces a new type of jailbreak for text-to-image models, called \"multimodal pragmatic jailbreak,\" where the combination of an image and text, each considered safe individually, results in unsafe content. This differs from previous work that focused on jailbreaking language models or image models separately.",
                "paper-title": "Multimodal Pragmatic Jailbreak on Text-to-image Models",
                "image-path": "flux_paper_image/2409.19149_1727915799.png"
            },

            {
                "startTime": "25:43",
                "arxivId": "2409.20171",
                "arxivLink": "https://arxiv.org/abs/2409.20171",
                "title": "Curb Your Enthusiasm: New Method Detects Road Edges Without Any Annotations!",
                "institute": "Hong Kong University of Science and Technology, Tsinghua University",
                "text": "This research proposes an annotation-free curb detection method using Altitude Difference Images (ADIs) derived from LiDAR point clouds. Unlike previous methods that rely on manually annotated data or struggle with lighting variations, this approach leverages the inherent altitude differences in ADIs to identify curbs, making it more robust and efficient.",
                "paper-title": "Annotation-Free Curb Detection Leveraging Altitude Difference Image",
                "image-path": "flux_paper_image/2409.20171_1727915437.png"
            },

            {
                "startTime": "26:08",
                "arxivId": "2409.19846",
                "arxivLink": "https://arxiv.org/abs/2409.19846",
                "title": "Semantic Segmentation Without Labels: PixelCLIP Makes It Happen!",
                "institute": "KAIST, Korea University, Google Research",
                "text": "This research proposes PixelCLIP, a method for open-vocabulary semantic segmentation that doesn't rely on pixel-level semantic labels. Instead, it leverages unlabeled masks generated from vision foundation models like SAM and DINO. This approach differs from previous work that either required pixel-level labels or relied on image-level captions for supervision.",
                "paper-title": "Towards Open-Vocabulary Semantic Segmentation Without Semantic Labels",
                "image-path": "flux_paper_image/2409.19846_1727818130.png"
            },

            {
                "startTime": "26:32",
                "arxivId": "2409.18980",
                "arxivLink": "https://arxiv.org/abs/2409.18980",
                "title": "IW-Bench: Turning Images into Websites, One Element at a Time!",
                "institute": "Beihang University, Alibaba Group, Tsinghua University...",
                "text": "This research introduces IW-BENCH, a new benchmark specifically designed to evaluate the performance of large multimodal models in converting images to web code. Unlike previous benchmarks that rely on BLEU scores, IW-BENCH focuses on evaluating the completeness of web elements and the accuracy of layout information.",
                "paper-title": "IW-Bench: Evaluating Large Multimodal Models for Converting Image-to-Web",
                "image-path": "flux_paper_image/2409.18980_1727915764.png"
            },

            {
                "startTime": "27:00",
                "arxivId": "2409.19242",
                "arxivLink": "https://arxiv.org/abs/2409.19242",
                "title": "Scientists Build a Diagram-Making Machine That Actually Listens!",
                "institute": "University of Maryland, IBM, Adobe",
                "text": "This research introduces a new task called \"SciDoc2Diagram\" which focuses on generating scientific diagrams from academic papers, taking into account user intent. Unlike previous text-to-image models that struggle with long-context inputs, this approach uses a multi-step pipeline to extract relevant information and generate diagrams based on user specifications.",
                "paper-title": "SciDoc2Diagrammer-MAF: Towards Generation of Scientific Diagrams from Documents guided by Multi-Aspect Feedback Refinement",
                "image-path": "flux_paper_image/2409.19242_1727819520.png"
            },

            {
                "startTime": "27:30",
                "arxivId": "2409.19005",
                "arxivLink": "https://arxiv.org/abs/2409.19005",
                "title": "Digital Twins: More Than Just a Pretty Face?",
                "institute": "National University of Singapore, University of the Philippines, Singapore-ETH Centre...",
                "text": "This research systematically analyzes over 15,000 scientific publications to understand how the definition of a digital twin varies across different domains within the built environment. It contrasts these findings with insights from an expert survey, identifying key components and their significance in each domain.",
                "paper-title": "What is a Digital Twin Anyway? Deriving the Definition for the Built Environment from over 15,000 Scientific Publications",
                "image-path": "flux_paper_image/2409.19005_1727820463.png"
            },

            {
                "startTime": "27:48",
                "arxivId": "2409.20434",
                "arxivLink": "https://arxiv.org/abs/2409.20434",
                "title": "QAEncoder: Stop Wasting Time Training, Get Query-Aligned Embeddings!",
                "institute": "Peking University, Chinese Academy of Sciences",
                "text": "This research introduces QAEncoder, a training-free approach to bridge the document-query gap in dense retrievers. Unlike previous methods that rely on training or generating pseudo-documents, QAEncoder leverages the conical distribution hypothesis to estimate the expectation of potential queries for each document, effectively aligning representations without additional index size or retrieval latency.",
                "paper-title": "QAEncoder: Towards Aligned Representation Learning in Question Answering System",
                "image-path": "flux_paper_image/2409.20434_1727818979.png"
            },

            {
                "startTime": "28:10",
                "arxivId": "2409.19625",
                "arxivLink": "https://arxiv.org/abs/2409.19625",
                "title": "Argumentation Gets a Time Machine: New Framework Tracks Dialogue Order",
                "institute": "Sorbonne University",
                "text": "This research introduces a new framework for modeling abstract argumentation graphs that incorporates the order of argument enunciation. Unlike previous work, this approach uses an action description language (ADL) to model the dynamic evolution of the argumentation graph, allowing for a more nuanced understanding of the causal relationships between arguments.",
                "paper-title": "An action language-based formalisation of an abstract argumentation framework",
                "image-path": "flux_paper_image/2409.19625_1727915124.png"
            },

            {
                "startTime": "28:36",
                "arxivId": "2409.19691",
                "arxivLink": "https://arxiv.org/abs/2409.19691",
                "title": "Chinese Essays Get a Rhetorical Makeover: New Dataset Helps AI Understand and Generate Fancy Writing!",
                "institute": "East China Normal University, Microsoft",
                "text": "This research introduces a new dataset called CERD, which focuses on understanding and generating rhetorical devices in Chinese essays. Unlike previous datasets that focus on single categories of rhetoric, CERD includes multiple categories and sub-tasks, allowing for a more comprehensive analysis of rhetorical phenomena.",
                "paper-title": "CERD: A Comprehensive Chinese Rhetoric Dataset for Rhetorical Understanding and Generation in Essays",
                "image-path": "flux_paper_image/2409.19691_1727915007.png"
            },

            {
                "startTime": "28:56",
                "arxivId": "2409.20139",
                "arxivLink": "https://arxiv.org/abs/2409.20139",
                "title": "Forget Adversarial Training, Just Tame Those Gradients!",
                "institute": "MIT",
                "text": "This research revisits the idea of regularizing the gradient norm of a model with respect to its input, a technique previously deemed less effective than adversarial training. The authors demonstrate that this approach can achieve near state-of-the-art robustness on ImageNet when applied to modern vision transformers, which utilize smooth activation functions.",
                "paper-title": "Characterizing Model Robustness via Natural Input Gradients",
                "image-path": "flux_paper_image/2409.20139_1727819117.png"
            },

            {
                "startTime": "29:21",
                "arxivId": "2409.19223",
                "arxivLink": "https://arxiv.org/abs/2409.19223",
                "title": "Face-Off: Can Cameras Beat Fingertips for High-Altitude Vitals?",
                "institute": "Qinghai University, Tsinghua University",
                "text": "This research introduces the SUMS dataset, a collection of synchronized facial and finger videos recorded at high altitudes during exercise and oxygen recovery scenarios. This dataset is unique because it captures the physiological fluctuations that occur in high-altitude environments, which are not adequately represented in existing datasets.",
                "paper-title": "Summit Vitals: Multi-Camera and Multi-Signal Biosensing at High Altitudes",
                "image-path": "flux_paper_image/2409.19223_1727915389.png"
            },

            {
                "startTime": "29:47",
                "arxivId": "2409.19890",
                "arxivLink": "https://arxiv.org/abs/2409.19890",
                "title": "UniMed: One Model to Rule Them All (Medical Images, That Is)",
                "institute": "Southeast University, Peking University, Case Western Reserve University",
                "text": "This paper proposes a universal medical image analysis model (UniMed) that can handle various tasks at different levels (image, region, pixel) without requiring task-specific branches or heads. UniMed uses a decomposed-composed decoder architecture to unify the input and output space, enabling flexible model combinations for diverse tasks.",
                "paper-title": "Universal Medical Image Representation Learning with Compositional Decoders",
                "image-path": "flux_paper_image/2409.19890_1727817907.png"
            },

            {
                "startTime": "30:12",
                "arxivId": "2409.19839",
                "arxivLink": "https://arxiv.org/abs/2409.19839",
                "title": "AI Forecasters: Can They Predict the Future (Or Just Google It)?",
                "institute": "Federal Reserve Bank of Chicago, Forecasting Research Institute, New York University...",
                "text": "This research introduces ForecastBench, a dynamic benchmark for evaluating AI forecasting systems. Unlike previous static benchmarks, ForecastBench continuously updates its questions and resolution values, ensuring it remains relevant and avoids data leakage.",
                "paper-title": "ForecastBench: A Dynamic Benchmark of AI Forecasting Capabilities",
                "image-path": "flux_paper_image/2409.19839_1727915069.png"
            },

            {
                "startTime": "30:37",
                "arxivId": "2409.19501",
                "arxivLink": "https://arxiv.org/abs/2409.19501",
                "title": "Talking Heads with Feelings: New AI Makes Virtual People More Expressive",
                "institute": "Stony Brook University, EPFL, Adobe Research...",
                "text": "This research focuses on generating talking heads that express emotions with varying intensity levels, unlike previous methods that often produce static emotional outputs. The authors propose a novel approach to capture and reproduce these subtle shifts in intensity by learning a continuous emotion latent space and using an audio-to-intensity predictor.",
                "paper-title": "Learning Frame-Wise Emotion Intensity for Audio-Driven Talking-Head Generation",
                "image-path": "flux_paper_image/2409.19501_1727818390.png"
            },

            {
                "startTime": "31:03",
                "arxivId": "2409.20329",
                "arxivLink": "https://arxiv.org/abs/2409.20329",
                "title": "Federated Learning: When Collaboration Backfires",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research investigates the impact of adversarial clients on personalized federated learning. Unlike previous work, it focuses on fine-tuning the level of collaboration between clients to mitigate the negative effects of adversarial behavior.",
                "paper-title": "Fine-Tuning Personalization in Federated Learning to Mitigate Adversarial Clients",
                "image-path": "flux_paper_image/2409.20329_1727818879.png"
            },

            {
                "startTime": "31:22",
                "arxivId": "2409.19764",
                "arxivLink": "https://arxiv.org/abs/2409.19764",
                "title": "Spiking Transformers Get a Temporal Tune-Up: New Attention Mechanism Makes Them See the Big Picture",
                "institute": "Yale University",
                "text": "This research introduces a new spatial-temporal attention mechanism for spiking transformers, which integrates information across both space and time. Previous spiking transformers only considered spatial attention, neglecting the temporal context inherent in the spike-based representation.",
                "paper-title": "Spiking Transformer with Spatial-Temporal Attention",
                "image-path": "flux_paper_image/2409.19764_1727818999.png"
            },

            {
                "startTime": "31:40",
                "arxivId": "2409.19686",
                "arxivLink": "https://arxiv.org/abs/2409.19686",
                "title": "Motion Masking: Diffusion Models Learn to Dance with a Blindfold!",
                "institute": "University College London",
                "text": "This research introduces a novel masking strategy for diffusion models used in text-driven human motion generation. Unlike previous methods that train motion encoders before inference, this approach directly masks portions of the motion embedding space during the diffusion process, forcing the model to learn contextual relationships between spatial and temporal semantics.",
                "paper-title": "Text-driven Human Motion Generation with Motion Masked Diffusion Model",
                "image-path": "flux_paper_image/2409.19686_1727914795.png"
            },

            {
                "startTime": "32:06",
                "arxivId": "2409.19278",
                "arxivLink": "https://arxiv.org/abs/2409.19278",
                "title": "RNNs: Building Brains to Mimic the World's Rhythms",
                "institute": "University of Tokyo",
                "text": "This paper presents an explicit construction of recurrent neural networks (RNNs) that effectively approximate discrete dynamical systems. Unlike previous work, it focuses on minimizing the maximal Lyapunov exponent by using an elementary algebraic approach.",
                "paper-title": "Explicit construction of recurrent neural networks effectively approximating discrete dynamical systems",
                "image-path": "flux_paper_image/2409.19278_1727818315.png"
            },

            {
                "startTime": "32:24",
                "arxivId": "2409.19258",
                "arxivLink": "https://arxiv.org/abs/2409.19258",
                "title": "VecLSTM: Turning Trajectory Data Into a Grid for Activity Recognition",
                "institute": "University of Washington",
                "text": "This research proposes VecLSTM, a framework that uses vectorization to transform raw trajectory data into a structured grid format. This approach differs from previous methods that primarily relied on traditional LSTM architectures.",
                "paper-title": "VecLSTM: Trajectory Data Processing and Management for Activity Recognition through LSTM Vectorization and Database Integration",
                "image-path": "flux_paper_image/2409.19258_1727818579.png"
            },

            {
                "startTime": "32:44",
                "arxivId": "2409.19431",
                "arxivLink": "https://arxiv.org/abs/2409.19431",
                "title": "Tilting the Scales: How a New Risk Metric Makes Machine Learning More Robust",
                "institute": "The Alan Turing Institute, University of Cambridge, University of Chicago...",
                "text": "This paper examines the generalization error of the tilted empirical risk (TER), a non-linear risk metric proposed by Li et al. (2021). Unlike previous work focusing on the linear empirical risk, this study provides bounds on the tilted generalization error for both bounded and unbounded loss functions.",
                "paper-title": "Generalization Error of the Tilted Empirical Risk",
                "image-path": "flux_paper_image/2409.19431_1727915653.png"
            },

            {
                "startTime": "33:15",
                "arxivId": "2409.20556",
                "arxivLink": "https://arxiv.org/abs/2409.20556",
                "title": "Want to See How a Painting Was Made? AI Can Now Recreate the Process!",
                "institute": "University of Washington",
                "text": "This research introduces a new method for reconstructing the painting process of an image by training a diffusion model on real painting videos. Unlike previous approaches that rely on hand-crafted painting principles, this method learns from real-world data, resulting in more realistic and human-like painting sequences.",
                "paper-title": "Inverse Painting: Reconstructing The Painting Process",
                "image-path": "flux_paper_image/2409.20556_1727915109.png"
            },

            {
                "startTime": "33:31",
                "arxivId": "2409.20251",
                "arxivLink": "https://arxiv.org/abs/2409.20251",
                "title": "MRI's New Trick: Learning to Sharpen Images with a Flip Angle Tweak",
                "institute": "University Hospital Erlangen, Friedrich-Alexander-Universit\u00e4t Erlangen-N\u00fcrnberg, University of W\u00fcrzburg...",
                "text": "This research proposes an end-to-end learning framework to optimize variable flip angle (VFA) schemes for 3D FSE sequences at 7T. Unlike previous heuristic approaches, this method automatically identifies VFAs that minimize image blurring or maximize SNR, considering multiple tissues and their spatial distributions.",
                "paper-title": "Controlling sharpness, SNR and SAR for 3D FSE at 7T by end-to-end learning",
                "image-path": "flux_paper_image/2409.20251_1727818377.png"
            },

            {
                "startTime": "33:54",
                "arxivId": "2409.19494",
                "arxivLink": "https://arxiv.org/abs/2409.19494",
                "title": "Robots Ditch Depth Sensors, Grasp Objects with Just RGB Images!",
                "institute": "University of Washington, Amazon Robotics",
                "text": "This research proposes a novel approach for robotic suction grasping that relies solely on RGB images, eliminating the need for depth sensors. Unlike previous methods that often utilize depth information, this approach leverages pre-trained weights from a depth estimation model to predict grasp poses from synthetic training data, achieving generalization to real-world objects without any fine-tuning.",
                "paper-title": "OptiGrasp: Optimized Grasp Pose Detection Using RGB Images for Warehouse Picking Robots",
                "image-path": "flux_paper_image/2409.19494_1727819327.png"
            },

            {
                "startTime": "34:16",
                "arxivId": "2409.19750",
                "arxivLink": "https://arxiv.org/abs/2409.19750",
                "title": "AstroLLaMA-2-70B: A 70B-Parameter LLM for Astronomy, But Can It Handle the Big Questions?",
                "institute": "University of Illinois, University of Pennsylvania, Harvard University...",
                "text": "This research introduces a new set of astronomy-focused LLMs, AstroLLaMA-3-8B and AstroLLaMA-2-70B, and benchmarks their performance against existing models. The study also explores the impact of continual pretraining on different model sizes.",
                "paper-title": "AstroMLab 2: AstroLLaMA-2-70B Model and Benchmarking Specialised LLMs for Astronomy",
                "image-path": "flux_paper_image/2409.19750_1727819489.png"
            },

            {
                "startTime": "34:40",
                "arxivId": "2409.20483",
                "arxivLink": "https://arxiv.org/abs/2409.20483",
                "title": "News Recommender Systems: Balancing Accuracy and Editorial Values",
                "institute": "ETH Zurich, University of Bari, Polytechnic University of Bari...",
                "text": "This research focuses on the impact of recommender systems on the flow of news, going beyond traditional accuracy metrics to evaluate how these systems align with editorial values and potentially influence democratic functions of news publishers.",
                "paper-title": "RecSys Challenge 2024: Balancing Accuracy and Editorial Values in News Recommendations",
                "image-path": "flux_paper_image/2409.20483_1727819316.png"
            },

            {
                "startTime": "35:06",
                "arxivId": "2409.20156",
                "arxivLink": "https://arxiv.org/abs/2409.20156",
                "title": "Training Extreme Classifiers: ANNS to the Rescue!",
                "institute": "Microsoft",
                "text": "This research proposes a new training algorithm called ASTRA for extreme classifiers, which uses approximate nearest neighbor search (ANNS) on classifier weights to efficiently sample hard negatives. This approach differs from previous methods that either rely on expensive negative sampling strategies or use stale indices, leading to accuracy issues.",
                "paper-title": "ASTRA: Accurate and Scalable ANNS-based Training of Extreme Classifiers",
                "image-path": "flux_paper_image/2409.20156_1727819872.png"
            },

            {
                "startTime": "35:33",
                "arxivId": "2409.20067",
                "arxivLink": "https://arxiv.org/abs/2409.20067",
                "title": "Breaking the Curse: Multi-Agent Learning Gets a Robust Makeover",
                "institute": "Caltech, Peking University, Carnegie Mellon University",
                "text": "This research introduces a new class of robust Markov games with \"fictitious uncertainty sets\" that account for both environmental and agent-specific uncertainties in a correlated manner. This differs from previous work that focused on independent uncertainty sets for each agent.",
                "paper-title": "Can We Break the Curse of Multiagency in Robust Multi-Agent Reinforcement Learning?",
                "image-path": "flux_paper_image/2409.20067_1727820036.png"
            },

            {
                "startTime": "35:59",
                "arxivId": "2409.19391",
                "arxivLink": "https://arxiv.org/abs/2409.19391",
                "title": "Deep Learning for Multi-Agent Games: Sparsity is the New Black!",
                "institute": "Tsinghua University, Hong Kong University of Science and Technology",
                "text": "This paper introduces a novel sparse training framework called MAST for value-based deep multi-agent reinforcement learning (MARL). Unlike previous work, MAST addresses the challenges of value estimation errors and policy inconsistency caused by sparsification by introducing a hybrid TD(\u03bb) target mechanism combined with the Soft Mellowmax operator and a dual buffer mechanism.",
                "paper-title": "Value-Based Deep Multi-Agent Reinforcement Learning with Dynamic Sparse Training",
                "image-path": "flux_paper_image/2409.19391_1727820031.png"
            },

            {
                "startTime": "36:22",
                "arxivId": "2409.20289",
                "arxivLink": "https://arxiv.org/abs/2409.20289",
                "title": "Robots Team Up to See the Whole Picture: NeRFs Go Distributed!",
                "institute": "University of Illinois, Nvidia, UC Berkeley",
                "text": "This research proposes a distributed learning approach for multi-agent NeRF reconstruction, where agents share only their learned model weights, reducing communication overhead compared to traditional methods that transfer raw data.",
                "paper-title": "Distributed NeRF Learning for Collaborative Multi-Robot Perception",
                "image-path": "flux_paper_image/2409.20289_1727817789.png"
            },

            {
                "startTime": "36:44",
                "arxivId": "2409.19926",
                "arxivLink": "https://arxiv.org/abs/2409.19926",
                "title": "Risk-Averse Decisions: Debunking the Entropic Risk Underestimation Myth!",
                "institute": "University of Montreal, HEC Montr\u00e9al, University of Cyprus",
                "text": "This research proposes a novel bootstrapping procedure to debias the empirical entropic risk estimator, addressing the underestimation problem that arises when limited data is available. Unlike previous work, this method utilizes a \"bias-aware\" distribution fitting technique to better capture tail events, leading to more accurate risk estimates.",
                "paper-title": "Data-driven decision-making under uncertainty with entropic risk measure",
                "image-path": "flux_paper_image/2409.19926_1727817854.png"
            },

            {
                "startTime": "37:09",
                "arxivId": "2409.20440",
                "arxivLink": "https://arxiv.org/abs/2409.20440",
                "title": "Optimistic Bandits: When Noise Makes You Smarter",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne, University of Chicago Booth School of Business",
                "text": "This research introduces a new approach to Follow-the-Perturbed-Leader (FTPL) algorithms for multi-armed bandits by allowing for correlated noise across arms. This differs from previous FTPL methods that typically assume independent noise.",
                "paper-title": "Optimism in the Face of Ambiguity Principle for Multi-Armed Bandits",
                "image-path": "flux_paper_image/2409.20440_1727915664.png"
            },

            {
                "startTime": "37:28",
                "arxivId": "2409.20385",
                "arxivLink": "https://arxiv.org/abs/2409.20385",
                "title": "Tylenol vs. Acetaminophen: Can AI Resist Misinformation Requests?",
                "institute": "Mass General Brigham, Brigham and Women\u2019s Hospital, Dana-Farber Cancer Institute...",
                "text": "This research investigates the ability of large language models (LLMs) to resist requests for misinformation, specifically focusing on the generation of misleading medical information. Unlike previous work that primarily explored jailbreaking in the context of extreme content, this study examines LLMs' capacity to recognize and resist illogical or factually flawed requests.",
                "paper-title": "Wait, but Tylenol is Acetaminophen... Investigating and Improving Language Models' Ability to Resist Requests for Misinformation",
                "image-path": "flux_paper_image/2409.20385_1727915426.png"
            },

            {
                "startTime": "37:56",
                "arxivId": "2409.19218",
                "arxivLink": "https://arxiv.org/abs/2409.19218",
                "title": "List Regression: It's Not Just for Classifiers Anymore!",
                "institute": "Stanford University",
                "text": "This paper extends the concept of list learning, where algorithms output multiple predictions, from classification to regression. It introduces two new combinatorial dimensions, the k-OIG dimension and the k-fat-shattering dimension, to characterize realizable and agnostic list regression, respectively.",
                "paper-title": "A Characterization of List Regression",
                "image-path": "flux_paper_image/2409.19218_1727819164.png"
            },

            {
                "startTime": "38:17",
                "arxivId": "2409.19978",
                "arxivLink": "https://arxiv.org/abs/2409.19978",
                "title": "Violina: Unveiling the Secrets of Memory in Complex Systems",
                "institute": "University of Tokyo",
                "text": "This research introduces Violina, a new system identification method that can model linear time-invariant non-Markovian dynamics using multiple time-series data. Unlike previous methods, Violina incorporates memory effects and constraints, allowing for more accurate and physically realistic models.",
                "paper-title": "Violina: Various-of-trajectories Identification of Linear Time-invariant Non-Markovian Dynamics",
                "image-path": "flux_paper_image/2409.19978_1727820475.png"
            },

            {
                "startTime": "38:38",
                "arxivId": "2409.19001",
                "arxivLink": "https://arxiv.org/abs/2409.19001",
                "title": "LLMs Need a Little Help: New Method Makes Them Pay Attention to Instructions",
                "institute": "Huawei Technologies, \u00c9cole Polytechnique, Yale University",
                "text": "This research introduces GUIDE, a method that directly increases attention scores for specific instruction tokens within a prompt. Unlike previous approaches like supervised fine-tuning or reinforcement learning, GUIDE doesn't require additional training.",
                "paper-title": "Pay Attention to What Matters",
                "image-path": "flux_paper_image/2409.19001_1727915395.png"
            },

            {
                "startTime": "39:01",
                "arxivId": "2409.19479",
                "arxivLink": "https://arxiv.org/abs/2409.19479",
                "title": "Robots Learn to Navigate Like Humans, Avoiding Walls and Dead Ends",
                "institute": "University of Oxford",
                "text": "This research proposes a new method for training deep differentiable planners that can navigate unseen environments. Unlike previous work, this method explicitly models illegal actions and noisy motion, leading to more robust performance in complex environments.",
                "paper-title": "Spatial Reasoning and Planning for Deep Embodied Agents",
                "image-path": "flux_paper_image/2409.19479_1727915075.png"
            },

            {
                "startTime": "39:23",
                "arxivId": "2409.19605",
                "arxivLink": "https://arxiv.org/abs/2409.19605",
                "title": "DPO's Secret Weapon: Samplers That Make Language Models Learn Faster!",
                "institute": "Tsinghua University, University of Washington",
                "text": "This research focuses on the optimization properties of Direct Preference Optimization (DPO), specifically analyzing the impact of different sampling strategies on its convergence rates. Unlike previous work that primarily focused on data-driven perspectives, this paper delves into the optimization aspect, revealing a surprising separation in convergence rates between uniform and mixed samplers.",
                "paper-title": "The Crucial Role of Samplers in Online Direct Preference Optimization",
                "image-path": "flux_paper_image/2409.19605_1727819069.png"
            },

            {
                "startTime": "39:45",
                "arxivId": "2409.20167",
                "arxivLink": "https://arxiv.org/abs/2409.20167",
                "title": "AI Tutoring Gets a Knowledge Boost: LLMs Extract Learning Components from Multimedia Content",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research proposes a novel method for automatically extracting knowledge components (KCs) from educational content using instruction-tuned large multimodal models (LLMs). Unlike previous work that relies on statistical data and human-defined KCs, this approach leverages the capabilities of LLMs to analyze text, images, and even audio to identify and describe KCs.",
                "paper-title": "Using Large Multimodal Models to Extract Knowledge Components for Knowledge Tracing from Multimedia Question Information",
                "image-path": "flux_paper_image/2409.20167_1727820186.png"
            },

            {
                "startTime": "40:10",
                "arxivId": "2409.19425",
                "arxivLink": "https://arxiv.org/abs/2409.19425",
                "title": "Forget Big Models, Tiny Projectors Rule the Multimodal World!",
                "institute": "ML Labs, UC Berkeley, TII Abu Dhabi",
                "text": "This research proposes a novel approach to multimodal vision-language alignment by training lightweight projection layers between pretrained, frozen unimodal encoders. This differs from previous work that typically involves training large, joint models from scratch.",
                "paper-title": "From Unimodal to Multimodal: Scaling up Projectors to Align Modalities",
                "image-path": "flux_paper_image/2409.19425_1727915750.png"
            },

            {
                "startTime": "40:33",
                "arxivId": "2409.19592",
                "arxivLink": "https://arxiv.org/abs/2409.19592",
                "title": "Whisper It, Not Shout It: New AI Makes Collaborative Perception Ultra-Efficient",
                "institute": "Tsinghua University",
                "text": "This research proposes DiffCP, a collaborative perception (CP) paradigm that uses a diffusion model to compress sensing information from multiple agents. Unlike previous CP methods that rely on transmitting raw data or compressed features, DiffCP leverages the correlations between sensor data to reconstruct the co-agent's perception at the ego-agent's side, significantly reducing communication overhead.",
                "paper-title": "DiffCP: Ultra-Low Bit Collaborative Perception via Diffusion Model",
                "image-path": "flux_paper_image/2409.19592_1727819342.png"
            },

            {
                "startTime": "40:57",
                "arxivId": "2409.19272",
                "arxivLink": "https://arxiv.org/abs/2409.19272",
                "title": "LLMs Get a Makeover: PerceptionCompressor Squeezes Out Redundancy in Long Contexts!",
                "institute": "Tsinghua University, Ant Group, Sun Yat-sen University",
                "text": "This paper introduces PerceptionCompressor, a training-free method for compressing prompts in long context scenarios. Unlike previous methods that focus on removing low-perplexity tokens, PerceptionCompressor leverages contrast perplexity to identify and retain key information tokens while removing noise.",
                "paper-title": "Perception Compressor:A training-free prompt compression method in long context scenarios",
                "image-path": "flux_paper_image/2409.19272_1727914855.png"
            },

            {
                "startTime": "41:19",
                "arxivId": "2409.19012",
                "arxivLink": "https://arxiv.org/abs/2409.19012",
                "title": "LLMs: Lost in Logic Games, But Can They Reflect Their Way Out?",
                "institute": "Princeton University",
                "text": "This research constructs a new dataset of LSAT logic games, including metadata like difficulty and game type, and evaluates the performance of LLMs on this dataset using various prompting strategies. It also explores the effectiveness of a self-reflection framework, where LLMs are given feedback on their incorrect answers and asked to revise their reasoning.",
                "paper-title": "Lost in the Logic: An Evaluation of Large Language Models' Reasoning Capabilities on LSAT Logic Games",
                "image-path": "flux_paper_image/2409.19012_1727915134.png"
            },

            {
                "startTime": "41:37",
                "arxivId": "2409.20409",
                "arxivLink": "https://arxiv.org/abs/2409.20409",
                "title": "Brain Tumor Tracking: A Physics-Fueled Deep Dive into Glioblastoma Growth",
                "institute": "University of Zurich, Technical University of Munich, Harvard University...",
                "text": "This research introduces a novel method for estimating the full spatial distribution of tumor cells in glioblastoma patients by combining physics-based models with data-driven approaches. Unlike previous methods that rely on hard constraints from physical models, this approach uses a unique discretization scheme to create soft constraints, allowing for greater flexibility in assimilating patient data.",
                "paper-title": "Physics-Regularized Multi-Modal Image Assimilation for Brain Tumor Localization",
                "image-path": "flux_paper_image/2409.20409_1727914942.png"
            },

            {
                "startTime": "42:00",
                "arxivId": "2409.19439",
                "arxivLink": "https://arxiv.org/abs/2409.19439",
                "title": "Double Vision: How Aerial Photos Boost Plant Recognition",
                "institute": "Stanford University",
                "text": "This research proposes a new pre-training method called CRISP, which leverages both ground-level and aerial images to improve representation learning for natural world imagery. Unlike previous work that focuses on single-view pre-training, CRISP utilizes the complementary information from multiple views to enhance downstream tasks like species recognition and distribution mapping.",
                "paper-title": "Contrastive ground-level image and remote sensing pre-training improves representation learning for natural world imagery",
                "image-path": "flux_paper_image/2409.19439_1727819410.png"
            },

            {
                "startTime": "42:22",
                "arxivId": "2409.20264",
                "arxivLink": "https://arxiv.org/abs/2409.20264",
                "title": "Deep Learning Gets a First-Order Makeover: Solving PDEs with Neural Networks",
                "institute": "ETH Zurich, University of Vienna",
                "text": "This research introduces a new framework for solving PDEs using deep neural networks. It leverages a first-order system least squares (FoSLS) formulation, which differs from previous approaches that often rely on variational principles or pointwise residuals.",
                "paper-title": "First Order System Least Squares Neural Networks",
                "image-path": "flux_paper_image/2409.20264_1727817896.png"
            },

            {
                "startTime": "42:45",
                "arxivId": "2409.20187",
                "arxivLink": "https://arxiv.org/abs/2409.20187",
                "title": "DAG Models: A New Test to Tell If They're Actually True!",
                "institute": "Carnegie Mellon University, University of Minnesota",
                "text": "This paper introduces a new statistical test, the Markov Checker, to verify if a directed acyclic graph (DAG) model accurately reflects the relationships in the data. Unlike previous methods that rely on assumptions about the data, the Markov Checker directly assesses the model's ability to predict conditional independence relationships.",
                "paper-title": "Choosing DAG Models Using Markov and Minimal Edge Count in the Absence of Ground Truth",
                "image-path": "flux_paper_image/2409.20187_1727817820.png"
            },

            {
                "startTime": "43:11",
                "arxivId": "2409.20342",
                "arxivLink": "https://arxiv.org/abs/2409.20342",
                "title": "AI Doctors: Cancer Imaging Gets a Helping Hand!",
                "institute": "BAMF Health, National Institute of Health, Frederick National Laboratory for Cancer Research...",
                "text": "This research focuses on using AI to generate annotations for cancer images in the National Cancer Institute's Image Data Commons (IDC). Unlike previous work, this study provides both the AI models and the generated annotations, making it easier for researchers to use and build upon.",
                "paper-title": "AI generated annotations for Breast, Brain, Liver, Lungs and Prostate cancer collections in National Cancer Institute Imaging Data Commons",
                "image-path": "flux_paper_image/2409.20342_1727915758.png"
            },

            {
                "startTime": "43:32",
                "arxivId": "2409.19226",
                "arxivLink": "https://arxiv.org/abs/2409.19226",
                "title": "Robots Learn to Open Doors: A Bridge Policy for Planning in Unpredictable Worlds",
                "institute": "MIT",
                "text": "This research introduces a novel approach to bridge the gap between model-based planning and reinforcement learning (RL) for robots operating in unpredictable environments. The key innovation lies in the use of a \"CallPlanner\" action within the RL problem, allowing the agent to learn a \"bridge policy\" that effectively resolves novel situations before handing control back to the planner. This approach differs from previous work by explicitly leveraging the planner's knowledge and avoiding the need to learn the entire task from scratch.",
                "paper-title": "Learning to Bridge the Gap: Efficient Novelty Recovery with Planning and Reinforcement Learning",
                "image-path": "flux_paper_image/2409.19226_1727820205.png"
            },

            {
                "startTime": "43:56",
                "arxivId": "2409.19011",
                "arxivLink": "https://arxiv.org/abs/2409.19011",
                "title": "Quantum Machine Learning: Bias is a B*tch, but We've Got the Cure!",
                "institute": "University of California San Diego",
                "text": "This research delves into the unique biases that arise in quantum machine learning (QML) systems, going beyond the typical data and algorithmic biases seen in classical machine learning. It identifies five specific biases inherent to QML, including encoding, inductive, realizability, state-dependent, and sampling biases.",
                "paper-title": "Identification and Mitigating Bias in Quantum Machine Learning",
                "image-path": "flux_paper_image/2409.19011_1727915537.png"
            },

            {
                "startTime": "44:23",
                "arxivId": "2409.18995",
                "arxivLink": "https://arxiv.org/abs/2409.18995",
                "title": "AI's Got a Triage Problem: Can We Align It With Our Values?",
                "institute": "Harvard University",
                "text": "This research introduces a novel metric, the Alignment Compliance Index (ACI), to quantify how effectively a large language model (LLM) can be aligned with a given preference function or gold standard. This differs from previous work by focusing on the effect of alignment rather than the process itself.",
                "paper-title": "SYSTEMATIC CHARACTERIZATION OF THE EFFECTIVENESS OF ALIGNMENT IN LARGE LANGUAGE MODELS FOR CATEGORICAL DECISIONS",
                "image-path": "flux_paper_image/2409.18995_1727915822.png"
            },

            {
                "startTime": "44:46",
                "arxivId": "2409.19308",
                "arxivLink": "https://arxiv.org/abs/2409.19308",
                "title": "LLMs Get a Makeover: Fine-Tuning for Opinion-Generating Superpowers!",
                "institute": "University College London",
                "text": "This research focuses on fine-tuning large language models (LLMs) to simulate public opinions on environmental policies, specifically by conditioning them on socio-demographic factors. This approach differs from previous work by emphasizing the importance of tailoring LLMs to specific societal contexts for more accurate and ethical policy simulations.",
                "paper-title": "Designing Domain-Specific Large Language Models: The Critical Role of Fine-Tuning in Public Opinion Simulation",
                "image-path": "flux_paper_image/2409.19308_1727914961.png"
            },

            {
                "startTime": "45:13",
                "arxivId": "2409.20276",
                "arxivLink": "https://arxiv.org/abs/2409.20276",
                "title": "NeRF-tastic Mapping: How a Voronoi Graph Helps Robots Explore Like Pros",
                "institute": "Tsinghua University",
                "text": "This research introduces a new method for active neural mapping that uses a generalized Voronoi graph (GVG) to structure information within a neural map. This allows for more efficient and thorough exploration of large-scale indoor environments compared to previous methods.",
                "paper-title": "Active Neural Mapping at Scale",
                "image-path": "flux_paper_image/2409.20276_1727914917.png"
            },

            {
                "startTime": "45:38",
                "arxivId": "2409.20366",
                "arxivLink": "https://arxiv.org/abs/2409.20366",
                "title": "Singlish Particles: Unmasking the Meaning with AI!",
                "institute": "University of Edinburgh, CMU",
                "text": "This research uses task-driven representation learning to disentangle the pragmatic functions of Singlish discourse particles, a novel approach compared to previous linguistic analyses.",
                "paper-title": "Disentangling Singlish Discourse Particles with Task-Driven Representation",
                "image-path": "flux_paper_image/2409.20366_1727915383.png"
            }
    ],
    "stats": {
        "num_pick": 116,
        "num_total": 542,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202410011620_audio.mp3"
}