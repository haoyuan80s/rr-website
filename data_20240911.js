
daily_data = {
    "date": "2024-09-11",
    "tweets": [
            {
                "startTime": "01:04",
                "arxivId": "2409.06285",
                "arxivLink": "https://arxiv.org/abs/2409.06285",
                "title": "Anomaly Detection Gets a Memory Boost: New Research Uses Sequential Reconstruction to Spot Outliers",
                "institute": "Tsinghua University",
                "text": "This research introduces a novel Reconstruction as Sequence (RAS) method for unified unsupervised anomaly detection. Unlike previous methods that focus on reconstructing features independently, RAS leverages a sequence modeling perspective, considering each decoder layer as a step in a sequence. This allows for capturing both sequential and spatial dynamics during feature reconstruction, enhancing contextual awareness.",
                "paper-title": "Context Enhancement with Reconstruction as Sequence for Unified Unsupervised Anomaly Detection",
                "image-path": "flux_paper_image/2409.06285_1726084272.png"
            },

            {
                "startTime": "01:27",
                "arxivId": "2409.06656",
                "arxivLink": "https://arxiv.org/abs/2409.06656",
                "title": "Sortformer: Diarizing Speakers Like a Boss, One Token at a Time!",
                "institute": "NVIDIA",
                "text": "This research introduces Sort Loss, a novel approach to speaker diarization that leverages the arrival time order of speech segments to resolve permutation issues. Unlike previous end-to-end diarization models that rely on permutation invariant loss (PIL), Sort Loss enables a diarization model to autonomously resolve permutation without relying on PIL.",
                "paper-title": "Sortformer: Seamless Integration of Speaker Diarization and ASR by Bridging Timestamps and Tokens",
                "image-path": "flux_paper_image/2409.06656_1726082204.png"
            },

            {
                "startTime": "01:50",
                "arxivId": "2409.06338",
                "arxivLink": "https://arxiv.org/abs/2409.06338",
                "title": "LLMs: Are They Just Good at Finding Needles or Understanding Haystacks?",
                "institute": "Google",
                "text": "This research proposes a framework called DOLCE to automatically categorize long context understanding tasks based on whether they primarily require retrieval or holistic understanding. This differs from previous work that often relies on manual categorization or focuses on general difficulty levels.",
                "paper-title": "Retrieval Or Holistic Understanding? Dolce: Differentiate Our Long Context Evaluation Tasks",
                "image-path": "flux_paper_image/2409.06338_1726083063.png"
            },

            {
                "startTime": "02:10",
                "arxivId": "2409.06609",
                "arxivLink": "https://arxiv.org/abs/2409.06609",
                "title": "CNNs for MRSI: Precision Matters, Not Just Accuracy!",
                "institute": "Technical University of Munich, Massachusetts Institute of Technology, University of California San Francisco...",
                "text": "This research focuses on improving the precision of CNNs for magnetic resonance spectroscopic imaging (MRSI) by introducing new dropout techniques. Unlike previous work that primarily focused on mean error metrics, this study emphasizes the importance of comprehensive precision metrics like standard deviations and confidence intervals.",
                "paper-title": "Improving the Precision of CNNs for Magnetic Resonance Spectral Modeling",
                "image-path": "flux_paper_image/2409.06609_1726082951.png"
            },

            {
                "startTime": "02:44",
                "arxivId": "2409.05929",
                "arxivLink": "https://arxiv.org/abs/2409.05929",
                "title": "Multi-Modal Alignment: MoE Makes It a Party!",
                "institute": "Geely Automobile Research Institute (Ningbo) Co. Ltd, Peking University, Shenzhen Institute of Advanced Technology Chinese Academy of Sciences",
                "text": "This paper introduces Alt-MoE, a novel multi-modal alignment method that uses a Mixture of Experts (MoE) as a unified connector across modalities. Unlike previous methods that rely on modality-specific connectors, Alt-MoE employs a multi-step sequential alternating unidirectional alignment strategy, which converges to bidirectional alignment over iterations.",
                "paper-title": "Alt-MoE: Multimodal Alignment via Alternating Optimization of Multi-directional MoE with Unimodal Models",
                "image-path": "flux_paper_image/2409.05929_1726082246.png"
            },

            {
                "startTime": "03:09",
                "arxivId": "2409.06130",
                "arxivLink": "https://arxiv.org/abs/2409.06130",
                "title": "Model Watermarks: Outsmarting the Backdoor Attackers with In-Distribution Triggers!",
                "institute": "University of Cambridge, Nanjing University of Posts and Telecommunications",
                "text": "This research proposes a new model watermarking scheme called In-distribution Watermark Embedding (IWE) that uses in-distribution trigger sets instead of the traditional out-of-distribution ones. This approach aims to overcome the vulnerability of existing methods to watermark erasure attacks.",
                "paper-title": "On the Weaknesses of Backdoor-based Model Watermarking: An Information-theoretic Perspective",
                "image-path": "flux_paper_image/2409.06130_1726082507.png"
            },

            {
                "startTime": "03:44",
                "arxivId": "2409.06240",
                "arxivLink": "https://arxiv.org/abs/2409.06240",
                "title": "Satellite Pose Estimation: When the Sun's a Spotlight, Event Sensors Shine!",
                "institute": "Australian Institute for Machine Learning, Massachusetts Institute of Technology",
                "text": "This research proposes a test-time certifiable self-supervision scheme to bridge the Sim2Real gap in event-based satellite pose estimation. Unlike previous work, this method leverages a certifier module to verify the correctness of estimated poses and only backpropagates certified inputs, refining the predicted landmarks and improving pose estimates.",
                "paper-title": "Test-Time Certifiable Self-Supervision to Bridge the Sim2Real Gap in Event-Based Satellite Pose Estimation",
                "image-path": "flux_paper_image/2409.06240_1726082815.png"
            },

            {
                "startTime": "04:08",
                "arxivId": "2409.06107",
                "arxivLink": "https://arxiv.org/abs/2409.06107",
                "title": "Doppelg\u00e4nger's Watch: A New Way to Supervise Language Models",
                "institute": "Meta",
                "text": "This paper proposes a novel bicameral architecture for large language models (LLMs) that separates supervision signals from the core helpfulness of the model. Unlike previous approaches that fine-tune the model after pretraining, this method introduces a parallel component called \"Doppelg\u00e4nger\" that concurrently supervises the generation process and predicts the supervision score of the generated text.",
                "paper-title": "Doppelg\"anger's Watch: A Split Objective Approach to Large Language Models",
                "image-path": "flux_paper_image/2409.06107_1726083646.png"
            },

            {
                "startTime": "04:29",
                "arxivId": "2409.06691",
                "arxivLink": "https://arxiv.org/abs/2409.06691",
                "title": "LLMs Get a Soft Touch: Geometric Averaging for Better Alignment",
                "institute": "University of Tokyo",
                "text": "This research introduces the concept of \"soft preference labels\" to improve the alignment of LLMs with human preferences. Unlike previous methods that assume binary preferences, this approach considers the distributional nature of preferences, reflecting the nuanced relationship between responses. The paper proposes a weighted geometric averaging of LLM output likelihood in the loss function, which adjusts the scale of learning loss based on the soft labels.",
                "paper-title": "Geometric-Averaged Preference Optimization for Soft Preference Labels",
                "image-path": "flux_paper_image/2409.06691_1726083796.png"
            },

            {
                "startTime": "04:53",
                "arxivId": "2409.05875",
                "arxivLink": "https://arxiv.org/abs/2409.05875",
                "title": "Polyp-Spotting AI Gets a Memory Boost: New Feedback System Improves Colonoscopy Accuracy",
                "institute": "Northwestern University, Mayo Clinic, Beth Israel Deaconess Medical Center...",
                "text": "This research introduces a novel \"Feedback Attention Network-v2\" (FANetv2) for polyp segmentation. Unlike previous methods, FANetv2 iteratively refines its predictions by incorporating information from previous epochs, effectively learning from its mistakes.",
                "paper-title": "Transformer-Enhanced Iterative Feedback Mechanism for Polyp Segmentation",
                "image-path": "flux_paper_image/2409.05875_1726082474.png"
            },

            {
                "startTime": "05:25",
                "arxivId": "2409.05976",
                "arxivLink": "https://arxiv.org/abs/2409.05976",
                "title": "Federated Fine-Tuning: Stacking LLMs for Privacy and Efficiency",
                "institute": "University of Maryland, Rutgers University, GenBio.ai...",
                "text": "This research introduces FLORA, a federated fine-tuning method for LLMs that uses a stacking-based aggregation mechanism to address the noise and heterogeneity issues present in previous methods like FedIT.",
                "paper-title": "FLoRA: Federated Fine-Tuning Large Language Models with Heterogeneous Low-Rank Adaptations",
                "image-path": "flux_paper_image/2409.05976_1726084121.png"
            },

            {
                "startTime": "05:49",
                "arxivId": "2409.06189",
                "arxivLink": "https://arxiv.org/abs/2409.06189",
                "title": "MyGo: Driving Video Generation with a Camera's Eye for Detail!",
                "institute": "Tsinghua University",
                "text": "This research introduces MyGo, a framework that generates multi-view driving videos with camera control. Unlike previous methods that focus on controlling other objects in the scene, MyGo uses camera pose parameters to control the movement of the ego vehicle, enhancing the realism and controllability of the generated videos.",
                "paper-title": "MyGo: Consistent and Controllable Multi-View Driving Video Generation with Camera Control",
                "image-path": "flux_paper_image/2409.06189_1726084225.png"
            },

            {
                "startTime": "06:09",
                "arxivId": "2409.06450",
                "arxivLink": "https://arxiv.org/abs/2409.06450",
                "title": "AI's Got a New Driving Test: LLMs Build Realistic Scenarios for Autonomous Vehicles",
                "institute": "Tsinghua University, Ministry of Public Security",
                "text": "This research proposes OmniTester, a framework that uses multimodal Large Language Models (LLMs) to generate realistic and diverse scenarios for testing autonomous vehicles. Unlike previous methods that rely on predefined functions or search algorithms, OmniTester leverages the extensive world knowledge and reasoning capabilities of LLMs to create scenarios based on user-defined descriptions.",
                "paper-title": "Multimodal Large Language Model Driven Scenario Testing for Autonomous Vehicles",
                "image-path": "flux_paper_image/2409.06450_1726083630.png"
            },

            {
                "startTime": "06:40",
                "arxivId": "2409.06164",
                "arxivLink": "https://arxiv.org/abs/2409.06164",
                "title": "AI Chatbots Can Predict Suicide Risk: A New Lifeline for Mental Health Hotlines?",
                "institute": "Beijing University of Technology, Beijing Suicide Research and Prevention Center, WHO Collaborating Center for Research and Training in Suicide Prevention...",
                "text": "This research differs from previous work by analyzing long-form transcribed text from psychological support hotlines, rather than short texts from social media or interviews. It also incorporates a novel LLM-based pipeline that summarizes the text to extract key features and predict future suicidal behavior.",
                "paper-title": "Deep Learning and Large Language Models for Audio and Text Analysis in Predicting Suicidal Acts in Chinese Psychological Support Hotlines",
                "image-path": "flux_paper_image/2409.06164_1726082004.png"
            },

            {
                "startTime": "07:00",
                "arxivId": "2409.06443",
                "arxivLink": "https://arxiv.org/abs/2409.06443",
                "title": "DETR Distillation: Don't Just Match, Group Your Queries!",
                "institute": "Beihang University, Tsinghua University",
                "text": "This research introduces a novel Group Query Selection (GQS) method for knowledge distillation in Detection Transformers (DETRs). Unlike previous methods that solely focus on positive queries, GQS identifies and selects both positive and hard-negative queries, which are crucial for enhancing distillation outcomes.",
                "paper-title": "Knowledge Distillation via Query Selection for Detection Transformer",
                "image-path": "flux_paper_image/2409.06443_1726082513.png"
            },

            {
                "startTime": "07:26",
                "arxivId": "2409.06559",
                "arxivLink": "https://arxiv.org/abs/2409.06559",
                "title": "AI Cuts Through the Noise: Machine Learning Speeds Up Optimization",
                "institute": "University of Toronto, Huawei Technologies Canada",
                "text": "This research introduces a machine learning framework called Learn2Aggregate that focuses on optimizing the generation of Chv\u00b4atal-Gomory (CG) cuts in mixed integer linear programming (MILP). Unlike previous work that focused on selecting cuts from existing generators, Learn2Aggregate aims to identify the most useful constraints for aggregation, thereby reducing the computational complexity of the cut generation process.",
                "paper-title": "Learn2Aggregate: Supervised Generation of Chv\'atal-Gomory Cuts Using Graph Neural Networks",
                "image-path": "flux_paper_image/2409.06559_1726083753.png"
            },

            {
                "startTime": "07:55",
                "arxivId": "2409.06506",
                "arxivLink": "https://arxiv.org/abs/2409.06506",
                "title": "Point Clouds Get a Laplacian Makeover: Neural Networks to the Rescue!",
                "institute": "Peking University",
                "text": "This research proposes a novel method to learn the Laplacian operator for point clouds using graph neural networks (GNNs). Unlike previous methods that rely on local triangulation, this approach directly learns the Laplacian operator from data by mimicking its behavior on a set of probe functions.",
                "paper-title": "Neural Laplacian Operator for 3D Point Clouds",
                "image-path": "flux_paper_image/2409.06506_1726084361.png"
            },

            {
                "startTime": "08:12",
                "arxivId": "2409.06205",
                "arxivLink": "https://arxiv.org/abs/2409.06205",
                "title": "Say What You Want, Shape It Will Do: Text-to-Shape Displays with LLMs",
                "institute": "University of Chicago, University of Colorado",
                "text": "This research explores using large language models (LLMs) to generate code that controls pin-based shape displays, allowing users to create dynamic shapes and behaviors through natural language commands. This differs from previous work that relied on pre-programmed behaviors or more complex user interfaces.",
                "paper-title": "SHAPE-IT: Exploring Text-to-Shape-Display for Generative Shape-Changing Behaviors with LLMs",
                "image-path": "flux_paper_image/2409.06205_1726083005.png"
            },

            {
                "startTime": "08:36",
                "arxivId": "2409.05884",
                "arxivLink": "https://arxiv.org/abs/2409.05884",
                "title": "Forecasting the Future: Train Schedules Help Predict Energy Use",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research integrates future contextual information, such as train schedules, into transformer models for energy forecasting, unlike previous work that primarily relied on historical data.",
                "paper-title": "Integrating the Expected Future: Schedule Based Energy Forecasting",
                "image-path": "flux_paper_image/2409.05884_1726082803.png"
            },

            {
                "startTime": "08:58",
                "arxivId": "2409.06530",
                "arxivLink": "https://arxiv.org/abs/2409.06530",
                "title": "Bilevel Optimization: A New Algorithm That's Almost Too Good to Be True!",
                "institute": "Tsinghua University",
                "text": "This paper tackles a specific type of bilevel optimization problem, where the upper-level function is convex and minimized over the optimal solutions of a convex lower-level problem. The authors demonstrate that finding an absolute optimal solution is intractable for first-order methods, and they propose a novel method, FC-BiO, that achieves near-optimal rates for finding weak optimal solutions. This method differs from previous work by reformulating the problem as a functionally constrained problem and leveraging a bisection procedure.",
                "paper-title": "Functionally Constrained Algorithm Solves Convex Simple Bilevel Problems",
                "image-path": "flux_paper_image/2409.06530_1726082930.png"
            },

            {
                "startTime": "09:26",
                "arxivId": "2409.06307",
                "arxivLink": "https://arxiv.org/abs/2409.06307",
                "title": "Chords & Lyrics: A New Recipe for Song Generation",
                "institute": "Tsinghua University",
                "text": "This research introduces chords as a control condition for song generation, a novel approach compared to previous methods that primarily relied on acoustic features.",
                "paper-title": "An End-to-End Approach for Chord-Conditioned Song Generation",
                "image-path": "flux_paper_image/2409.06307_1726083801.png"
            },

            {
                "startTime": "09:49",
                "arxivId": "2409.06091",
                "arxivLink": "https://arxiv.org/abs/2409.06091",
                "title": "Tired of Training Thousands of Models? This New Trick Makes Multitask Learning a Breeze!",
                "institute": "Northeastern University, Google",
                "text": "This research introduces a novel algorithm, Grad-TAE, that estimates task affinities without repeatedly training models on various task combinations. It leverages the linearization property of deep neural networks, using gradient-based approximations to predict the loss of a model for a specific task combination.",
                "paper-title": "Scalable Multitask Learning Using Gradient-based Estimation of Task Affinity",
                "image-path": "flux_paper_image/2409.06091_1726082324.png"
            },

            {
                "startTime": "10:16",
                "arxivId": "2409.06129",
                "arxivLink": "https://arxiv.org/abs/2409.06129",
                "title": "\"Paint Your 3D Dreams: New AI Tool Lets You 'D\u00e9collage' Shapes with Style\"",
                "institute": "Simon Fraser University, Adobe Research, University of Montreal...",
                "text": "This research introduces a novel method for 3D detailization that allows users to control and localize geometric details by \"painting\" style exemplars onto different regions of a coarse shape. Unlike previous methods that focus on global detailization, this approach enables structure-preserving, high-resolution stylization with more coherent shape details and style transitions.",
                "paper-title": "DECOLLAGE: 3D Detailization by Controllable, Localized, and Learned Geometry Enhancement",
                "image-path": "flux_paper_image/2409.06129_1726082282.png"
            },

            {
                "startTime": "10:42",
                "arxivId": "2409.06702",
                "arxivLink": "https://arxiv.org/abs/2409.06702",
                "title": "AI Driving Assistants: Now with Built-in Chatbots!",
                "institute": "Tsinghua University, Mercedes-Benz Group China Ltd., Shanghai AI Lab",
                "text": "This research introduces Hint-AD, a framework that aligns natural language generation with the intermediate outputs of an end-to-end autonomous driving (AD) model. Unlike previous work that focused on declarative interpretability, Hint-AD incorporates a holistic token mixer and alignment tasks to ensure the generated language is grounded in the AD model's perception, prediction, and planning processes.",
                "paper-title": "Hint-AD: Holistically Aligned Interpretability in End-to-End Autonomous Driving",
                "image-path": "flux_paper_image/2409.06702_1726084040.png"
            },

            {
                "startTime": "11:04",
                "arxivId": "2409.06704",
                "arxivLink": "https://arxiv.org/abs/2409.06704",
                "title": "GeoCalib: Learning to See the World, One Image at a Time!",
                "institute": "ETH Zurich, Microsoft",
                "text": "This paper introduces GeoCalib, a deep neural network that leverages 3D geometric constraints through an optimization process to estimate camera parameters from a single image. Unlike previous approaches that either rely on classical geometry or are trained end-to-end, GeoCalib combines the best of both worlds, achieving higher accuracy and robustness.",
                "paper-title": "GeoCalib: Learning Single-image Calibration with Geometric Optimization",
                "image-path": "flux_paper_image/2409.06704_1726083967.png"
            },

            {
                "startTime": "11:26",
                "arxivId": "2409.06509",
                "arxivLink": "https://arxiv.org/abs/2409.06509",
                "title": "AI Gets a Brain: Teaching Machines to Think Like Humans",
                "institute": "Technical University of Berlin, Google",
                "text": "This research introduces a novel framework called AligNet, which aims to align deep learning models with human conceptual knowledge by incorporating hierarchical structure into their representations. This differs from previous work by focusing on the multi-level nature of human perception, rather than just local visual features.",
                "paper-title": "Aligning Machine and Human Visual Representations across Abstraction Levels",
                "image-path": "flux_paper_image/2409.06509_1726083294.png"
            },

            {
                "startTime": "11:49",
                "arxivId": "2409.06030",
                "arxivLink": "https://arxiv.org/abs/2409.06030",
                "title": "Shape Up, Shape Out: Neural Explicit Surface Intersection for Compact 3D Models",
                "institute": "University of British Columbia, NVIDIA, University of Texas A&M",
                "text": "This research proposes a novel shape representation called NESI (Neural Explicit Surface Intersection) that uses intersections of explicit surfaces, or height-fields, to represent 3D shapes. Unlike previous methods that rely on implicit or parametric representations, NESI combines the advantages of both, enabling efficient in-out queries and parameterization-based tasks.",
                "paper-title": "NESI: Shape Representation via Neural Explicit Surface Intersection",
                "image-path": "flux_paper_image/2409.06030_1726084132.png"
            },

            {
                "startTime": "12:14",
                "arxivId": "2409.06319",
                "arxivLink": "https://arxiv.org/abs/2409.06319",
                "title": "Fed Up with Big Data? This New FL Scheme Compresses Gradients Like a Boss!",
                "institute": "University of Waterloo, University of Toronto",
                "text": "This research proposes a novel rate-constrained federated learning (RC-FED) framework that directly optimizes the end-to-end compression rate of gradients in federated learning. Unlike existing methods that primarily focus on minimizing distortion, RC-FED aims to minimize distortion while simultaneously ensuring that the encoded gradient rate remains below a predefined threshold.",
                "paper-title": "Rate-Constrained Quantization for Communication-Efficient Federated Learning",
                "image-path": "flux_paper_image/2409.06319_1726083300.png"
            },

            {
                "startTime": "12:43",
                "arxivId": "2409.06514",
                "arxivLink": "https://arxiv.org/abs/2409.06514",
                "title": "Simulating the Stock Market with a \"K\" for \"K-Nearest Neighbor\"",
                "institute": "University of Oxford",
                "text": "This research introduces a new method for simulating limit order book (LOB) markets using K-nearest neighbor (K-NN) resampling. Unlike previous methods that rely on explicit modeling choices or deep learning, K-NN resampling is a non-parametric approach that leverages historical data to generate realistic LOB dynamics.",
                "paper-title": "Limit Order Book Simulation and Trade Evaluation with $K$-Nearest-Neighbor Resampling",
                "image-path": "flux_paper_image/2409.06514_1726082143.png"
            },

            {
                "startTime": "13:04",
                "arxivId": "2409.06328",
                "arxivLink": "https://arxiv.org/abs/2409.06328",
                "title": "LLMs: Secretly Planning Your Next Paragraph?",
                "institute": "University of Oxford",
                "text": "This research investigates whether LLMs plan ahead for the content of a paragraph by examining the information encoded in the activation of the double newline token. This differs from previous work that primarily focuses on token-level predictions.",
                "paper-title": "Extracting Paragraphs from LLM Token Activations",
                "image-path": "flux_paper_image/2409.06328_1726083493.png"
            },

            {
                "startTime": "13:28",
                "arxivId": "2409.06554",
                "arxivLink": "https://arxiv.org/abs/2409.06554",
                "title": "Global Trade: It's Not Just Supply and Demand, It's a Costly Dance!",
                "institute": "University of Cambridge",
                "text": "This research uses optimal transport theory to model global trade, which is different from traditional gravity models that rely on explicit covariates.",
                "paper-title": "Modelling Global Trade with Optimal Transport",
                "image-path": "flux_paper_image/2409.06554_1726083687.png"
            },

            {
                "startTime": "13:49",
                "arxivId": "2409.06029",
                "arxivLink": "https://arxiv.org/abs/2409.06029",
                "title": "SongCreator: Turning Lyrics into Hits, One Note at a Time!",
                "institute": "Tsinghua University, The Chinese University of Hong Kong",
                "text": "This research introduces a novel dual-sequence language model (DSLM) for song generation. Unlike previous models that treat vocals and accompaniment as a single entity, DSLM models them separately, capturing their mutual influence to create more harmonious and natural-sounding songs.",
                "paper-title": "SongCreator: Lyrics-based Universal Song Generation",
                "image-path": "flux_paper_image/2409.06029_1726081978.png"
            },

            {
                "startTime": "14:15",
                "arxivId": "2409.06427",
                "arxivLink": "https://arxiv.org/abs/2409.06427",
                "title": "Robots Learn to Be Body-Smart: A New Model for Multisensory Learning",
                "institute": "University of Tokyo",
                "text": "This research proposes a Generalized Multisensory Correlational Model (GeMuCo) that allows robots to learn a body schema, which describes the relationship between sensors and actuators, from their own experience. This differs from previous work that relies on human-designed network structures and assumptions about the robot's body.",
                "paper-title": "GeMuCo: Generalized Multisensory Correlational Model for Body Schema Learning",
                "image-path": "flux_paper_image/2409.06427_1726083809.png"
            },

            {
                "startTime": "14:38",
                "arxivId": "2409.05873",
                "arxivLink": "https://arxiv.org/abs/2409.05873",
                "title": "Molecule Design: A Recipe for Success, One Syntactic Skeleton at a Time!",
                "institute": "MIT, IBM",
                "text": "This research introduces a bilevel framework for molecule design and synthesis, decoupling the syntactic skeleton of a synthetic tree from its chemical semantics. This approach differs from previous work by leveraging ideas from syntax-guided synthesis, allowing for more granular optimization of both syntactic and semantic aspects of reaction pathways.",
                "paper-title": "Syntax-Guided Procedural Synthesis of Molecules",
                "image-path": "flux_paper_image/2409.05873_1726084115.png"
            },

            {
                "startTime": "15:00",
                "arxivId": "2409.06560",
                "arxivLink": "https://arxiv.org/abs/2409.06560",
                "title": "Deep Learning Gets a Physics Makeover: Variational Inference for Uncertainty Quantification",
                "institute": "University of Cambridge",
                "text": "This paper provides a comprehensive overview of variational inference (VI) for physics-informed deep generative modeling. It distinguishes itself by unifying recent literature on VI applications in physics, presenting a clear framework for understanding the similarities and differences between various methodologies.",
                "paper-title": "A Primer on Variational Inference for Physics-Informed Deep Generative Modelling",
                "image-path": "flux_paper_image/2409.06560_1726084356.png"
            },

            {
                "startTime": "15:23",
                "arxivId": "2409.06080",
                "arxivLink": "https://arxiv.org/abs/2409.06080",
                "title": "LLMs: Not Just for Chatbots Anymore! They Can Predict Molecular Properties Too!",
                "institute": "University of Wisconsin-Madison, The Pennsylvania State University",
                "text": "This research explores the ability of large language models (LLMs) to perform regression tasks for predicting molecular and materials properties, a departure from their traditional use in natural language processing. Unlike previous work that focused on classification or used more granular molecular representations, this study investigates the effectiveness of LLMs trained solely on textual prompts like SMILES strings and material compositions.",
                "paper-title": "Regression with Large Language Models for Materials and Molecular Property Prediction",
                "image-path": "flux_paper_image/2409.06080_1726082109.png"
            },

            {
                "startTime": "15:56",
                "arxivId": "2409.06111",
                "arxivLink": "https://arxiv.org/abs/2409.06111",
                "title": "Robots Get a Sixth Sense: New AI Helps Them Navigate Unfamiliar Terrain",
                "institute": "UC Berkeley",
                "text": "This research introduces a probabilistic and reconstruction-based competency estimation (PaRCE) method to assess the reliability of perception models used in robot navigation. Unlike previous methods that focus on overall uncertainty, PaRCE estimates competency at both the image and regional levels, providing a more nuanced understanding of the model's strengths and weaknesses.",
                "paper-title": "PaRCE: Probabilistic and Reconstruction-Based Competency Estimation for Safe Navigation Under Perception Uncertainty",
                "image-path": "flux_paper_image/2409.06111_1726082450.png"
            },

            {
                "startTime": "16:23",
                "arxivId": "2409.06613",
                "arxivLink": "https://arxiv.org/abs/2409.06613",
                "title": "Robot Learns Dexterous Skills with Just a Few Tips!",
                "institute": "Google DeepMind",
                "text": "This research introduces DemoStart, an auto-curriculum method for reinforcement learning that leverages demonstrations to guide the learning process. Unlike previous approaches that rely on large datasets of demonstrations or complex reward design, DemoStart uses a small number of sub-optimal demonstrations and a simple sparse reward to train policies that can solve complex manipulation tasks.",
                "paper-title": "DemoStart: Demonstration-led auto-curriculum applied to sim-to-real with multi-fingered robots",
                "image-path": "flux_paper_image/2409.06613_1726082097.png"
            },

            {
                "startTime": "16:50",
                "arxivId": "2409.06639",
                "arxivLink": "https://arxiv.org/abs/2409.06639",
                "title": "TeXBLEU: A Metric That Makes LaTeX Formulas Sing!",
                "institute": "Chung-Ang University, Seoul National University, NVIDIA",
                "text": "This research introduces TeXBLEU, a new evaluation metric specifically designed for assessing the quality of mathematical expressions written in LaTeX format. Unlike existing metrics like BLEU, which often struggle with the unique syntax of LaTeX, TeXBLEU leverages a specialized tokenizer and embedding model trained on a massive dataset of arXiv papers.",
                "paper-title": "TeXBLEU: Automatic Metric for Evaluate LaTeX Format",
                "image-path": "flux_paper_image/2409.06639_1726082842.png"
            },

            {
                "startTime": "17:17",
                "arxivId": "2409.06231",
                "arxivLink": "https://arxiv.org/abs/2409.06231",
                "title": "Shape Shifting: A Neural Network That Knows When to Zoom In!",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne, Max Planck Society",
                "text": "This paper introduces a new method for representing 3D shapes using implicit neural networks. Unlike previous methods that only provide a single level of detail, this approach allows for multiple levels of detail, enabling the network to represent shapes at different resolutions.",
                "paper-title": "A Latent Implicit 3D Shape Model for Multiple Levels of Detail",
                "image-path": "flux_paper_image/2409.06231_1726082221.png"
            },

            {
                "startTime": "17:47",
                "arxivId": "2409.06608",
                "arxivLink": "https://arxiv.org/abs/2409.06608",
                "title": "AI for Search and Rescue: Simulating the Real World, One Snowstorm at a Time!",
                "institute": "Microsoft",
                "text": "This research introduces HAMERITT, a simulation-based autonomy framework that generates scenarios with both raw sensor data and symbolic context, unlike previous UAV simulation environments.",
                "paper-title": "Simulation-based Scenario Generation for Robust Hybrid AI for Autonomy",
                "image-path": "flux_paper_image/2409.06608_1726083380.png"
            },

            {
                "startTime": "18:11",
                "arxivId": "2409.06053",
                "arxivLink": "https://arxiv.org/abs/2409.06053",
                "title": "Min-Max Games: A Statistical Physics Approach to Saddle Point Problems",
                "institute": "University of Tokyo, Fujitsu",
                "text": "This research introduces a statistical mechanical formalism for analyzing min-max problems in the high-dimensional limit, addressing the order of operations for min and max. It differs from previous work by explicitly considering the distinct effects of min and max operations in non-convex settings.",
                "paper-title": "Statistical Mechanics of Min-Max Problems",
                "image-path": "flux_paper_image/2409.06053_1726082379.png"
            },

            {
                "startTime": "18:33",
                "arxivId": "2409.05871",
                "arxivLink": "https://arxiv.org/abs/2409.05871",
                "title": "Prosthetic Wrist Woes? A Heatmap Reveals Where Your Body Compensates!",
                "institute": "Imperial College London, UC Berkeley",
                "text": "This research analyzed compensatory motions in the final pose of reaching movements, using a discretely sampled workspace and a novel Compensation Index that combines multiple evaluation metrics. Unlike previous studies, it standardized the target locations and incorporated a more comprehensive evaluation approach.",
                "paper-title": "Multi-feature Compensatory Motion Analysis for Reaching Motions Over a Discretely Sampled Workspace",
                "image-path": "flux_paper_image/2409.05871_1726082563.png"
            },

            {
                "startTime": "18:59",
                "arxivId": "2409.06605",
                "arxivLink": "https://arxiv.org/abs/2409.06605",
                "title": "Interactive Deep Learning: Giving Cancer Segmentation a Helping Hand!",
                "institute": "Aalto University, University of Tampere, Tampere University...",
                "text": "This research introduces a novel two-stage interactive click refinement (2S-ICR) framework for segmenting primary gross tumor volume (GTVp) in oropharyngeal cancer (OPC). Unlike previous interactive deep learning (DL) methods that rely on a single model, 2S-ICR utilizes two distinct models: a standard DL model for initial segmentation and an interactive DL model for refinement. This approach aims to avoid the trade-off between non-interactive and interactive performance often seen in single-model approaches.",
                "paper-title": "Interactive 3D Segmentation for Primary Gross Tumor Volume in Oropharyngeal Cancer",
                "image-path": "flux_paper_image/2409.06605_1726083827.png"
            },

            {
                "startTime": "19:32",
                "arxivId": "2409.05907",
                "arxivLink": "https://arxiv.org/abs/2409.05907",
                "title": "LLMs Get a Refusal Switch: Programming AI to Say \"No\" Only When It Matters",
                "institute": "University of Pennsylvania, IBM",
                "text": "This research introduces Conditional Activation Steering (CAST), a method that allows for selective control over LLM responses based on the input context. Unlike previous activation steering methods, which indiscriminately alter LLM behavior, CAST analyzes activation patterns to determine when to apply steering.",
                "paper-title": "Programming Refusal with Conditional Activation Steering",
                "image-path": "flux_paper_image/2409.05907_1726082296.png"
            },

            {
                "startTime": "19:55",
                "arxivId": "2409.05934",
                "arxivLink": "https://arxiv.org/abs/2409.05934",
                "title": "DOMINO: A Random Walk to Predict Your Electricity Bill (and Save the Planet!)",
                "institute": "University College London",
                "text": "This research introduces a new algorithm called DOMINO, which uses a random walk on Gaussian Processes (GPs) to predict electricity consumption. This approach is more frugal than previous methods, requiring less training data and computational resources.",
                "paper-title": "Predicting Electricity Consumption with Random Walks on Gaussian Processes",
                "image-path": "flux_paper_image/2409.05934_1726082393.png"
            },

            {
                "startTime": "20:33",
                "arxivId": "2409.05919",
                "arxivLink": "https://arxiv.org/abs/2409.05919",
                "title": "AI for Business: No Data Scientist Required!",
                "institute": "IBM",
                "text": "This research introduces KModels, a framework that simplifies AI deployment and management for business applications, particularly in on-premises environments. Unlike previous frameworks, KModels focuses on making AI accessible to non-technical users by abstracting away complex technical details and providing a template-driven approach.",
                "paper-title": "KModels: Unlocking AI for Business Applications",
                "image-path": "flux_paper_image/2409.05919_1726082940.png"
            },

            {
                "startTime": "20:56",
                "arxivId": "2409.06219",
                "arxivLink": "https://arxiv.org/abs/2409.06219",
                "title": "Denoising: It's Not Just for Noise Removal Anymore!",
                "institute": "Google",
                "text": "This paper presents a comprehensive perspective on denoisers, their structure, and desired properties, emphasizing their increasing importance as building blocks for complex tasks in imaging, inverse problems, and machine learning. It goes beyond simply removing noise and explores the broader applications of denoising.",
                "paper-title": "Denoising: A Powerful Building-Block for Imaging, Inverse Problems, and Machine Learning",
                "image-path": "flux_paper_image/2409.06219_1726081984.png"
            },

            {
                "startTime": "21:11",
                "arxivId": "2409.06520",
                "arxivLink": "https://arxiv.org/abs/2409.06520",
                "title": "Hyperspectral Cameras Get a Boresight Makeover: No More Blurry Views!",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research proposes a new method for automatically calibrating the boresight of hyperspectral cameras using only the raw spectral imagery and GPS/INS data, even when the GPS/INS data is noisy or imprecise. This approach differs from previous methods that rely on precise GPS/INS estimates and detailed terrain models.",
                "paper-title": "In Flight Boresight Rectification for Lightweight Airborne Pushbroom Imaging Spectrometry",
                "image-path": "flux_paper_image/2409.06520_1726083912.png"
            },

            {
                "startTime": "21:32",
                "arxivId": "2409.06437",
                "arxivLink": "https://arxiv.org/abs/2409.06437",
                "title": "Linear Models: A New Information-Theoretic Twist!",
                "institute": "University of Pennsylvania",
                "text": "This paper presents a novel information-theoretic proof for the consistency of the Gaussian maximum likelihood estimator in linear auto-regressive models. Unlike previous work that relied on comparing empirical and population risk functionals, this approach avoids direct comparison and instead leverages tools from information theory.",
                "paper-title": "A Short Information-Theoretic Analysis of Linear Auto-Regressive Learning",
                "image-path": "flux_paper_image/2409.06437_1726082620.png"
            },

            {
                "startTime": "21:51",
                "arxivId": "2409.05868",
                "arxivLink": "https://arxiv.org/abs/2409.05868",
                "title": "Specular Spectacle: 3D Gaussian Splatting Gets a Shiny Upgrade!",
                "institute": "Beihang University, Peking University",
                "text": "This research introduces a novel approach to 3D Gaussian Splatting by replacing spherical harmonics with latent neural descriptors. This allows for a more efficient representation of 3D feature fields, including geometry and appearance.",
                "paper-title": "SpecGaussian with Latent Features: A High-quality Modeling of the View-dependent Appearance for 3D Gaussian Splatting",
                "image-path": "flux_paper_image/2409.05868_1726083402.png"
            }
    ],
    "stats": {
        "num_pick": 51,
        "num_total": 264,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202409111311_audio.mp3"
}