
daily_data = {
    "date": "2024-10-10",
    "tweets": [
            {
                "startTime": "01:03",
                "arxivId": "2410.07071",
                "arxivLink": "https://arxiv.org/abs/2410.07071",
                "title": "Decision Transformers Get a Memory Boost: Remembering the Past to Conquer the Future!",
                "institute": "JKU Linz, ELLIS Unit, LIT AI Lab...",
                "text": "This research introduces Retrieval-Augmented Decision Transformers (RA-DT), which use an external memory to store past experiences and retrieve only relevant sub-trajectories for the current situation. This differs from previous in-context RL methods that require entire episodes in the agent's context, making them less efficient for complex environments with long episodes.",
                "paper-title": "Retrieval-Augmented Decision Transformer: External Memory for In-context RL",
                "image-path": "flux_paper_image/2410.07071_1728605015.png"
            },

            {
                "startTime": "01:32",
                "arxivId": "2410.05774",
                "arxivLink": "https://arxiv.org/abs/2410.05774",
                "title": "ActionAtlas: Sports Moves So Tricky, Even AI Can't Tell 'Em Apart!",
                "institute": "University of Washington",
                "text": "This research introduces ActionAtlas, a new video question-answering benchmark that focuses on recognizing complex, domain-specific actions, particularly in sports. Unlike previous benchmarks that often rely on single frames or simple actions, ActionAtlas challenges models to understand subtle movements and nuances across multiple frames.",
                "paper-title": "ActionAtlas: A VideoQA Benchmark for Domain-specialized Action Recognition",
                "image-path": "flux_paper_image/2410.05774_1728607322.png"
            },

            {
                "startTime": "02:01",
                "arxivId": "2410.06303",
                "arxivLink": "https://arxiv.org/abs/2410.06303",
                "title": "AI Learns to Imagine New Things: A Recipe for Zero-Shot Compositional Generalization",
                "institute": "Meta",
                "text": "This paper introduces a new method called Compositional Risk Minimization (CRM) for training classifiers that can generalize to unseen combinations of attributes. Unlike previous work that focuses on generative models, CRM tackles discriminative tasks, where the goal is to predict attributes based on novel combinations of features.",
                "paper-title": "Compositional Risk Minimization",
                "image-path": "flux_paper_image/2410.06303_1728609029.png"
            },

            {
                "startTime": "02:21",
                "arxivId": "2410.05880",
                "arxivLink": "https://arxiv.org/abs/2410.05880",
                "title": "Privacy-Preserving Optimization: Shrinking Datasets, Expanding Possibilities!",
                "institute": "Weizmann Institute of Science, University of Washington",
                "text": "This research introduces new algorithms for differentially private optimization of non-smooth, non-convex functions. The key innovation lies in using variance reduction techniques to improve the sensitivity of gradient estimators, leading to a reduction in the required dataset size. This contrasts with previous work that relied on a less efficient approach.",
                "paper-title": "Improved Sample Complexity for Private Nonsmooth Nonconvex Optimization",
                "image-path": "flux_paper_image/2410.05880_1728606247.png"
            },

            {
                "startTime": "02:42",
                "arxivId": "2410.06689",
                "arxivLink": "https://arxiv.org/abs/2410.06689",
                "title": "Point Cloud Quality: A Bitstream-Based Peek Inside the Compression!",
                "institute": "Qingdao University, Shandong University, Peking University...",
                "text": "This research introduces a new model for assessing the quality of 3D point clouds compressed using the Trisoup-Lifting method. Unlike previous models that require full decoding, this one analyzes the compressed bitstream directly, making it faster and more efficient.",
                "paper-title": "Perceptual Quality Assessment of Trisoup-Lifting Encoded 3D Point Clouds",
                "image-path": "flux_paper_image/2410.06689_1728609828.png"
            },

            {
                "startTime": "03:17",
                "arxivId": "2410.06424",
                "arxivLink": "https://arxiv.org/abs/2410.06424",
                "title": "VQ-VAEs Get a Spin: The Rotation Trick for Better Compression",
                "institute": "Stanford University, Google DeepMind",
                "text": "This research proposes a new way to propagate gradients through the vector quantization layer in VQ-VAEs. Unlike the commonly used Straight-Through Estimator (STE), the \"rotation trick\" preserves the angle between the codebook vector and the gradient, leading to more nuanced updates for encoder outputs.",
                "paper-title": "Restructuring Vector Quantization with the Rotation Trick",
                "image-path": "flux_paper_image/2410.06424_1728608782.png"
            },

            {
                "startTime": "03:41",
                "arxivId": "2410.06479",
                "arxivLink": "https://arxiv.org/abs/2410.06479",
                "title": "Shrinking Super Brains: How to Slim Down LLMs Without Losing Their Smarts",
                "institute": "University of Freiburg, ELLIS Institute T\u00fcbingen, Bosch Center for Artificial Intelligence...",
                "text": "This research extends two-stage Neural Architecture Search (NAS) to compress large language models (LLMs) by proposing a novel sampling strategy and incorporating parameter-efficient fine-tuning methods. Unlike previous work, this approach focuses on structured pruning, aiming to identify optimal sparsity blocks for inference improvements.",
                "paper-title": "LLM Compression with Neural Architecture Search",
                "image-path": "flux_paper_image/2410.06479_1728610006.png"
            },

            {
                "startTime": "04:14",
                "arxivId": "2410.05362",
                "arxivLink": "https://arxiv.org/abs/2410.05362",
                "title": "LLMs Learn From Rewards: A New Kind of In-Context Learning",
                "institute": "Cornell University, \u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne, Harvard University",
                "text": "This research explores whether large language models (LLMs) can learn new tasks through in-context reinforcement learning (ICRL), where the model receives rewards for its predictions instead of being given correct labels. This differs from previous work on in-context learning, which primarily focused on supervised learning.",
                "paper-title": "LLMs Are In-Context Reinforcement Learners",
                "image-path": "flux_paper_image/2410.05362_1728607007.png"
            },

            {
                "startTime": "04:38",
                "arxivId": "2410.05222",
                "arxivLink": "https://arxiv.org/abs/2410.05222",
                "title": "Tiny Data, Big Insights: How to Accurately Measure LLMs with Just a Few Examples",
                "institute": "Amazon, UC Berkeley",
                "text": "This research introduces an empirical Bayes (EB) estimator for precisely measuring the performance of large language models (LLMs) on specific topics, even when only a small amount of data is available. This approach combines the strengths of direct estimation and synthetic regression, offering more accurate estimates than either method alone.",
                "paper-title": "Precise Model Benchmarking with Only a Few Observations",
                "image-path": "flux_paper_image/2410.05222_1728606718.png"
            },

            {
                "startTime": "05:00",
                "arxivId": "2410.06234",
                "arxivLink": "https://arxiv.org/abs/2410.06234",
                "title": "Chatting with Satellites: A New AI Can Talk About Earth's Changing Landscape",
                "institute": "Stanford University",
                "text": "This research introduces TEOChat, a vision-language model that can understand and respond to questions about temporal sequences of Earth observation data, unlike previous models that only handle single images.",
                "paper-title": "TEOChat: A Large Vision-Language Assistant for Temporal Earth Observation Data",
                "image-path": "flux_paper_image/2410.06234_1728608048.png"
            },

            {
                "startTime": "05:27",
                "arxivId": "2410.05629",
                "arxivLink": "https://arxiv.org/abs/2410.05629",
                "title": "LLMs Learn to Speak the Language of Numbers: A New Way to Teach AI",
                "institute": "UC San Diego, Microsoft Research",
                "text": "This research explores whether LLMs can perform in-context learning (ICL) directly on continuous vectors, a capability that could dramatically expand their applicability. Previous work has focused on ICL with textual data, but this paper investigates the use of continuous vectors from diverse domains, such as sensor readings, financial time series, or scientific measurements.",
                "paper-title": "Vector-ICL: In-context Learning with Continuous Vector Representations",
                "image-path": "flux_paper_image/2410.05629_1728605512.png"
            },

            {
                "startTime": "05:51",
                "arxivId": "2410.05258",
                "arxivLink": "https://arxiv.org/abs/2410.05258",
                "title": "Attention Noise? DIFF Transformer to the Rescue!",
                "institute": "Microsoft Research, Tsinghua University",
                "text": "This paper introduces a new attention mechanism called \"differential attention\" for Transformer models. It calculates attention scores as the difference between two separate softmax attention maps, effectively canceling out noise and promoting sparse attention patterns. This approach differs from previous work by directly addressing the issue of irrelevant context in Transformer models.",
                "paper-title": "Differential Transformer",
                "image-path": "flux_paper_image/2410.05258_1728606087.png"
            },

            {
                "startTime": "06:13",
                "arxivId": "2410.04638",
                "arxivLink": "https://arxiv.org/abs/2410.04638",
                "title": "Weak Teachers, Strong Students: How Bad Advice Can Lead to Great Results",
                "institute": "UC Berkeley",
                "text": "This paper investigates a new paradigm called \"weak-to-strong generalization\" where a weaker model provides imperfect labels to train a stronger model. Unlike traditional teacher-student models, the teacher here is not necessarily better than the student.",
                "paper-title": "Provable Weak-to-Strong Generalization via Benign Overfitting",
                "image-path": "flux_paper_image/2410.04638_1728605293.png"
            },

            {
                "startTime": "06:32",
                "arxivId": "2410.04660",
                "arxivLink": "https://arxiv.org/abs/2410.04660",
                "title": "AI Doctor's New Trick: Knowledge Graph for Smarter Medical Answers",
                "institute": "Harvard University, University of Illinois Chicago, Imperial College London...",
                "text": "This research introduces KGAREVION, an agent that combines the strengths of large language models (LLMs) with knowledge graphs (KGs) to improve medical question answering. Unlike previous approaches that rely solely on LLMs or KGs, KGAREVION uses a multi-step process to generate, verify, and revise knowledge, leading to more accurate and reliable answers.",
                "paper-title": "Knowledge Graph Based Agent for Complex, Knowledge-Intensive QA in Medicine",
                "image-path": "flux_paper_image/2410.04660_1728606764.png"
            },

            {
                "startTime": "06:59",
                "arxivId": "2410.06961",
                "arxivLink": "https://arxiv.org/abs/2410.06961",
                "title": "LLMs Learn to Teach Themselves: A Self-Boosting AI Revolution",
                "institute": "Peking University, Microsoft Research",
                "text": "This research introduces SynPO, a self-boosting paradigm for LLM alignment that leverages synthetic preference data. Unlike previous methods that rely on static, pre-collected preference datasets, SynPO iteratively generates new data, enabling LLMs to continuously improve their capabilities.",
                "paper-title": "Self-Boosting Large Language Models with Synthetic Preference Data",
                "image-path": "flux_paper_image/2410.06961_1728605823.png"
            },

            {
                "startTime": "07:28",
                "arxivId": "2410.04739",
                "arxivLink": "https://arxiv.org/abs/2410.04739",
                "title": "TableRAG: Million-Token Tables? No Problem!",
                "institute": "Google",
                "text": "This research introduces TableRAG, a framework that uses retrieval-augmented generation (RAG) to efficiently understand large tables. Unlike previous methods that process entire tables, TableRAG focuses on retrieving only the most relevant information, significantly reducing the computational cost and token usage.",
                "paper-title": "TableRAG: Million-Token Table Understanding with Language Models",
                "image-path": "flux_paper_image/2410.04739_1728604869.png"
            },

            {
                "startTime": "07:53",
                "arxivId": "2410.05281",
                "arxivLink": "https://arxiv.org/abs/2410.05281",
                "title": "AI-Powered Micrometer: Predicting Material Behavior with a Transformer Twist!",
                "institute": "Yale University, Imperial College London, University of Pennsylvania",
                "text": "This research introduces Micrometer, a transformer-based AI model for predicting the mechanical response of heterogeneous materials. Unlike previous work, Micrometer learns the solution operator of the Lippmann-Schwinger equation, enabling efficient evaluation of mechanical responses across varying microstructures and material properties.",
                "paper-title": "Micrometer: Micromechanics Transformer for Predicting Mechanical Responses of Heterogeneous Materials",
                "image-path": "flux_paper_image/2410.05281_1728606898.png"
            },

            {
                "startTime": "08:15",
                "arxivId": "2410.06238",
                "arxivLink": "https://arxiv.org/abs/2410.06238",
                "title": "LLMs Learn to Explore: Teaching AI to Make Better Decisions",
                "institute": "Stanford University, Google",
                "text": "This research focuses on evaluating and improving the ability of large language models (LLMs) to make optimal decisions in uncertain environments, specifically within the framework of multi-armed bandits and contextual bandits. Unlike previous work that primarily focused on LLMs as predictors, this study explores their decision-making capabilities in scenarios where exploration is crucial for maximizing rewards.",
                "paper-title": "EVOLvE: Evaluating and Optimizing LLMs For Exploration",
                "image-path": "flux_paper_image/2410.06238_1728606364.png"
            },

            {
                "startTime": "08:36",
                "arxivId": "2410.06317",
                "arxivLink": "https://arxiv.org/abs/2410.06317",
                "title": "Q-Learning Goes Deep: Action-Value Methods Get a Policy Gradient Makeover!",
                "institute": "Riot Games, Spotify, Google DeepMind",
                "text": "This paper challenges the conventional wisdom that policy gradient methods are better suited for complex action spaces than action-value methods. It identifies three core principles that underpin the success of policy gradients and shows how these principles can be adapted to action-value methods, enabling them to achieve similar performance without relying on policy gradients.",
                "paper-title": "Learning in complex action spaces without policy gradients",
                "image-path": "flux_paper_image/2410.06317_1728608450.png"
            },

            {
                "startTime": "09:02",
                "arxivId": "2410.05292",
                "arxivLink": "https://arxiv.org/abs/2410.05292",
                "title": "LLMs Go Flow: Turning Text into Data with Volterra Magic!",
                "institute": "Yale University",
                "text": "This paper introduces CaLMFlow, a novel framework that uses causal language models (CLMs) to solve Volterra integral equations (VIEs) for flow matching. This approach differs from previous work by leveraging the power of LLMs for continuous data generation, bridging the gap between discrete language modeling and continuous generative modeling.",
                "paper-title": "CaLMFlow: Volterra Flow Matching using Causal Language Models",
                "image-path": "flux_paper_image/2410.05292_1728606910.png"
            },

            {
                "startTime": "09:19",
                "arxivId": "2410.06300",
                "arxivLink": "https://arxiv.org/abs/2410.06300",
                "title": "Shapley Values Get a Fourier Makeover: Faster Explanations for AI",
                "institute": "ETH Zurich",
                "text": "This research proposes a novel method for computing SHAP values, a popular feature attribution method in explainable AI. Unlike previous methods that rely on stochastic sampling or expensive optimization, this approach leverages the sparse Fourier representation of the model to efficiently compute SHAP values.",
                "paper-title": "Amortized SHAP values via sparse Fourier function approximation",
                "image-path": "flux_paper_image/2410.06300_1728604879.png"
            },

            {
                "startTime": "09:42",
                "arxivId": "2410.05451",
                "arxivLink": "https://arxiv.org/abs/2410.05451",
                "title": "LLMs: No More Prompt Hijacking! Alignment to the Rescue!",
                "institute": "UC Berkeley, Meta",
                "text": "This research proposes a novel approach to defending LLMs against prompt injection attacks by leveraging alignment training. Unlike previous defenses that focus on fine-tuning or prompting, this method constructs a preference dataset containing both desirable and undesirable outputs, effectively teaching the LLM to prioritize the intended instruction even in the presence of malicious prompts.",
                "paper-title": "Aligning LLMs to Be Robust Against Prompt Injection",
                "image-path": "flux_paper_image/2410.05451_1728607783.png"
            },

            {
                "startTime": "10:05",
                "arxivId": "2410.05026",
                "arxivLink": "https://arxiv.org/abs/2410.05026",
                "title": "Robot Learning Gets a Helping Hand: Active Fine-Tuning for Smarter Bots!",
                "institute": "ETH Zurich",
                "text": "This research proposes a new algorithm called AMF (Active Multi-task Fine-tuning) for efficiently fine-tuning pre-trained robot policies. Unlike previous work that relies on uniform sampling of tasks for demonstrations, AMF actively selects the most informative tasks to demonstrate, maximizing the information gain about the expert policy.",
                "paper-title": "Active Fine-Tuning of Generalist Policies",
                "image-path": "flux_paper_image/2410.05026_1728605009.png"
            },

            {
                "startTime": "10:25",
                "arxivId": "2410.05553",
                "arxivLink": "https://arxiv.org/abs/2410.05553",
                "title": "NMT Models Learn to Follow Instructions: A Recipe for Customized Translations",
                "institute": "Microsoft",
                "text": "This research explores instruction finetuning for Neural Machine Translation (NMT) models, a technique typically used with Large Language Models (LLMs). The paper presents a recipe for adapting NMT models to follow instructions, enabling them to perform various translation-specific tasks, such as formality control or multi-modal translation.",
                "paper-title": "On Instruction-Finetuning Neural Machine Translation Models",
                "image-path": "flux_paper_image/2410.05553_1728609764.png"
            },

            {
                "startTime": "10:45",
                "arxivId": "2410.05090",
                "arxivLink": "https://arxiv.org/abs/2410.05090",
                "title": "HyperINF: Schulz's Method Gets a Superpower Boost for Data Influence Estimation!",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research proposes HYPERINF, a new method for approximating influence functions. Unlike previous methods like LISSA and DATAINF, HYPERINF leverages the hyperpower method, specifically Schulz's iterative algorithm, to achieve more accurate and stable results.",
                "paper-title": "HyperINF: Unleashing the HyperPower of the Schulz's Method for Data Influence Estimation",
                "image-path": "flux_paper_image/2410.05090_1728605167.png"
            },

            {
                "startTime": "11:07",
                "arxivId": "2410.04996",
                "arxivLink": "https://arxiv.org/abs/2410.04996",
                "title": "Unmeasured Confounders? No Problem! New Method Uses Negative Controls for Robust Inference",
                "institute": "Carnegie Mellon University",
                "text": "This research introduces a post-integrated inference method that leverages negative control outcomes to adjust for latent heterogeneity in data integration. Unlike previous methods, this approach is assumption-lean and robust to model misspecification, making it suitable for a wider range of applications.",
                "paper-title": "Assumption-Lean Post-Integrated Inference with Negative Control Outcomes",
                "image-path": "flux_paper_image/2410.04996_1728606746.png"
            },

            {
                "startTime": "11:26",
                "arxivId": "2410.05078",
                "arxivLink": "https://arxiv.org/abs/2410.05078",
                "title": "Tiny Transformers: Compressing Data Like a Boss!",
                "institute": "Google",
                "text": "This research investigates the compression capabilities of small pre-trained transformers, unlike previous work that focused on large foundation models. It also examines the impact of multimodal training on compression performance.",
                "paper-title": "Compression via Pre-trained Transformers: A Study on Byte-Level Multimodal Data",
                "image-path": "flux_paper_image/2410.05078_1728605970.png"
            },

            {
                "startTime": "11:50",
                "arxivId": "2410.06490",
                "arxivLink": "https://arxiv.org/abs/2410.06490",
                "title": "FedL2G: Learning to Guide Local Training in Federated Learning - A New Way to Train Models Without Sharing Your Data!",
                "institute": "Tsinghua University, Shanghai Jiao Tong University",
                "text": "This research proposes a new method called FedL2G for heterogeneous federated learning (HtFL). Unlike previous methods that rely on sharing prototypes, FedL2G learns to guide local training by updating guiding vectors based on client feedback, ensuring that the guidance benefits the original local task.",
                "paper-title": "FedL2G: Learning to Guide Local Training in Heterogeneous Federated Learning",
                "image-path": "flux_paper_image/2410.06490_1728606811.png"
            },

            {
                "startTime": "12:16",
                "arxivId": "2410.04707",
                "arxivLink": "https://arxiv.org/abs/2410.04707",
                "title": "Making LLMs Think Hard: When to Give Your AI More Brainpower",
                "institute": "MIT",
                "text": "This research introduces a method for adaptively allocating computational resources to language models (LLMs) during inference. Unlike previous work that uses the same decoding procedure for all inputs, this approach predicts the difficulty of each input and allocates more resources to those that are harder to process.",
                "paper-title": "Learning How Hard to Think: Input-Adaptive Allocation of LM Computation",
                "image-path": "flux_paper_image/2410.04707_1728608862.png"
            },

            {
                "startTime": "12:36",
                "arxivId": "2410.06718",
                "arxivLink": "https://arxiv.org/abs/2410.06718",
                "title": "Matryoshka Meets Mamba: A State Space Model That's Big on Adaptability",
                "institute": "University of Washington",
                "text": "This paper introduces MatMamba, a state space model that incorporates a nested Matryoshka structure. Unlike previous work that focused on applying Matryoshka to specific components of models, MatMamba applies it to the entire Mamba2 block, enabling the extraction of numerous submodels without additional training.",
                "paper-title": "MatMamba: A Matryoshka State Space Model",
                "image-path": "flux_paper_image/2410.06718_1728604759.png"
            },

            {
                "startTime": "12:55",
                "arxivId": "2410.06084",
                "arxivLink": "https://arxiv.org/abs/2410.06084",
                "title": "Music AI Gets a Diversity Boost: No More Same Old Tunes!",
                "institute": "Google",
                "text": "This research introduces a novel finetuning strategy for generative models that combines distillation and reinforcement learning to improve the quality-diversity trade-off. Unlike previous work that focuses on training a population of models with diverse abilities, this approach optimizes the diversity of generations from a single model.",
                "paper-title": "Diversity-Rewarded CFG Distillation",
                "image-path": "flux_paper_image/2410.06084_1728607530.png"
            },

            {
                "startTime": "13:16",
                "arxivId": "2410.05954",
                "arxivLink": "https://arxiv.org/abs/2410.05954",
                "title": "Video Generation Gets a Pyramid Makeover: Less Noise, More Efficiency!",
                "institute": "Peking University",
                "text": "This paper introduces a novel video generative modeling framework called \"pyramidal flow matching.\" Unlike previous cascaded approaches that train separate models for different resolutions, this method uses a unified model to simultaneously generate and decompress visual content across pyramid stages.",
                "paper-title": "Pyramidal Flow Matching for Efficient Video Generative Modeling",
                "image-path": "flux_paper_image/2410.05954_1728606012.png"
            },

            {
                "startTime": "13:50",
                "arxivId": "2410.05437",
                "arxivLink": "https://arxiv.org/abs/2410.05437",
                "title": "LLMs on a Diet: Shrinking Language Models Without Losing Their Smarts!",
                "institute": "Nvidia",
                "text": "This paper proposes a new technique for compressing large language models (LLMs) by focusing on reducing the dimensionality of activations, rather than compressing the weights. This approach allows for retraining without losing expressivity, unlike previous weight-centric methods.",
                "paper-title": "ESPACE: Dimensionality Reduction of Activations for Model Compression",
                "image-path": "flux_paper_image/2410.05437_1728606643.png"
            },

            {
                "startTime": "14:17",
                "arxivId": "2410.06333",
                "arxivLink": "https://arxiv.org/abs/2410.06333",
                "title": "Bayesian Optimization Gets a Batch of New Tricks: Maximizing the Odds of Finding the Best Molecule!",
                "institute": "MIT, University of Cambridge",
                "text": "This research proposes a new acquisition strategy for batched Bayesian optimization called qPO (multipoint Probability of Optimality). Unlike previous methods that balance exploration and exploitation, qPO focuses solely on exploitation, maximizing the probability that the selected batch contains the true optimum.",
                "paper-title": "Batched Bayesian optimization with correlated candidate uncertainties",
                "image-path": "flux_paper_image/2410.06333_1728608612.png"
            },

            {
                "startTime": "14:43",
                "arxivId": "2410.05639",
                "arxivLink": "https://arxiv.org/abs/2410.05639",
                "title": "LLMs Need a Makeover: DecorateLM Gives Training Data a Glamorous Upgrade",
                "institute": "Modelbest Inc, Tsinghua University",
                "text": "This research introduces DecorateLM, a data engineering method that refines the pretraining corpus for LLMs through a three-phase process: rating, tagging, and editing. Unlike previous work that focuses on data annotation or selection, DecorateLM aims to enhance the quality of existing data by adding metadata, improving structure, and ensuring relevance.",
                "paper-title": "DecorateLM: Data Engineering through Corpus Rating, Tagging, and Editing with Language Models",
                "image-path": "flux_paper_image/2410.05639_1728607372.png"
            },

            {
                "startTime": "15:03",
                "arxivId": "2410.05295",
                "arxivLink": "https://arxiv.org/abs/2410.05295",
                "title": "AI Jailbreakers Go Rogue: LLMs Learn to Break Themselves",
                "institute": "University of Wisconsin-Madison",
                "text": "This research introduces AutoDAN-Turbo, a method that uses lifelong learning agents to automatically discover and combine jailbreak strategies for LLMs. Unlike previous work that relies on human-designed strategies or optimization algorithms, AutoDAN-Turbo autonomously explores and evolves its attack techniques.",
                "paper-title": "AutoDAN-Turbo: A Lifelong Agent for Strategy Self-Exploration to Jailbreak LLMs",
                "image-path": "flux_paper_image/2410.05295_1728605183.png"
            },

            {
                "startTime": "15:28",
                "arxivId": "2410.06698",
                "arxivLink": "https://arxiv.org/abs/2410.06698",
                "title": "Penguins, Fourier, and Event Cameras: A New Way to See Wildlife Behavior",
                "institute": "Technische Universit\u00e4t Berlin, Robotics Institute Germany, Science of Intelligence Excellence Cluster...",
                "text": "This research uses the Fourier Transform to analyze data from event cameras, which are novel sensors that record changes in light intensity instead of images. This approach is different from previous work that relies on deep neural networks and image-like representations of event data.",
                "paper-title": "Fourier-based Action Recognition for Wildlife Behavior Quantification with Event Cameras",
                "image-path": "flux_paper_image/2410.06698_1728607209.png"
            },

            {
                "startTime": "15:52",
                "arxivId": "2410.06209",
                "arxivLink": "https://arxiv.org/abs/2410.06209",
                "title": "Theorem Proving Goes Lifelong: AI Learns Math Like a Pro",
                "institute": "Caltech, Stanford University, University of Wisconsin-Madison",
                "text": "This research introduces LeanAgent, a lifelong learning framework for theorem proving. Unlike previous approaches that train on static datasets, LeanAgent continuously learns from new mathematical repositories without forgetting previously learned knowledge.",
                "paper-title": "LeanAgent: Lifelong Learning for Formal Theorem Proving",
                "image-path": "flux_paper_image/2410.06209_1728608481.png"
            },

            {
                "startTime": "16:17",
                "arxivId": "2410.04618",
                "arxivLink": "https://arxiv.org/abs/2410.04618",
                "title": "Blind Face Restoration: No More Pixelated Past!",
                "institute": "Samsung AI Center Toronto, University of Toronto, Vector Institute for AI",
                "text": "This paper proposes an unsupervised approach to fine-tune pre-trained face restoration models on unseen degradations, using a diffusion model to generate pseudo targets without relying on paired ground-truth images.",
                "paper-title": "Towards Unsupervised Blind Face Restoration using Diffusion Prior",
                "image-path": "flux_paper_image/2410.04618_1728606178.png"
            },

            {
                "startTime": "16:40",
                "arxivId": "2410.04870",
                "arxivLink": "https://arxiv.org/abs/2410.04870",
                "title": "SignGD: The Transformer's Fast Learner, Slow Thinker",
                "institute": "Tsinghua University",
                "text": "This research analyzes the training dynamics of Sign Gradient Descent (SignGD) when optimizing a two-layer transformer, a task that has been challenging to study theoretically. It differs from previous work by focusing on SignGD, a simpler surrogate for Adam, and by analyzing a transformer with trainable query-key parameterization, a more realistic setting than previous studies.",
                "paper-title": "On the Optimization and Generalization of Two-layer Transformers with Sign Gradient Descent",
                "image-path": "flux_paper_image/2410.04870_1728605639.png"
            },

            {
                "startTime": "17:08",
                "arxivId": "2410.06205",
                "arxivLink": "https://arxiv.org/abs/2410.06205",
                "title": "RoPE's Secret: LLMs Are Spinning a Yarn, Not Just Decaying!",
                "institute": "University of Oxford, Google DeepMind",
                "text": "This research challenges the common belief that Rotary Positional Encodings (RoPE) are primarily useful for decaying attention weights with distance. It instead proposes that RoPE's different frequencies are used for distinct purposes, with high frequencies constructing positional attention patterns and low frequencies carrying semantic information.",
                "paper-title": "Round and Round We Go! What makes Rotary Positional Encodings useful?",
                "image-path": "flux_paper_image/2410.06205_1728606651.png"
            },

            {
                "startTime": "17:33",
                "arxivId": "2410.05563",
                "arxivLink": "https://arxiv.org/abs/2410.05563",
                "title": "LLMs Learn to Think Before They Answer: A Metareasoning Revolution!",
                "institute": "Princeton University, EPFL, Anthropic",
                "text": "This research introduces a novel approach to training LLMs that incorporates the concept of \"rational metareasoning,\" enabling them to adaptively adjust their reasoning process based on task complexity. Unlike previous methods that either reduce cost at the expense of performance or vice versa, this approach aims to optimize the trade-off between these two factors.",
                "paper-title": "Rational Metareasoning for Large Language Models",
                "image-path": "flux_paper_image/2410.05563_1728609111.png"
            },

            {
                "startTime": "17:56",
                "arxivId": "2410.05146",
                "arxivLink": "https://arxiv.org/abs/2410.05146",
                "title": "Speech Translation Gets a Speed Boost: CTC-GMM Makes MT Data Work Harder!",
                "institute": "Microsoft",
                "text": "This research introduces CTC-GMM, a method that uses Connectionist Temporal Classification (CTC) to compress speech sequences, allowing the model to leverage machine translation (MT) data for improved streaming speech translation (ST) performance. This approach differs from previous work by directly incorporating MT data into the ST model, rather than relying on pseudo labels or separate text-to-speech systems.",
                "paper-title": "CTC-GMM: CTC guided modality matching for fast and accurate streaming speech translation",
                "image-path": "flux_paper_image/2410.05146_1728608554.png"
            },

            {
                "startTime": "18:27",
                "arxivId": "2410.07064",
                "arxivLink": "https://arxiv.org/abs/2410.07064",
                "title": "Data Selection for Language Models: A Control Freak's Guide to Better AI",
                "institute": "Tsinghua University",
                "text": "This research formulates data selection for language models as an Optimal Control problem, a mathematical framework that allows for a more precise analysis of how data influences model training. This approach differs from previous methods that rely on heuristics or single-checkpoint performance.",
                "paper-title": "Data Selection via Optimal Control for Language Models",
                "image-path": "flux_paper_image/2410.07064_1728607474.png"
            },

            {
                "startTime": "18:49",
                "arxivId": "2410.05188",
                "arxivLink": "https://arxiv.org/abs/2410.05188",
                "title": "Networks Get a Matrix Makeover: Multidimensional Dynamics Take Center Stage!",
                "institute": "Nordita, Stockholm University, KTH Royal Institute of Technology...",
                "text": "This research introduces matrix-weighted networks (MWNs), a new framework for modeling multidimensional interactions in complex systems. Unlike traditional networks that use scalar edge weights, MWNs use matrices to represent the complex relationships between nodes, allowing for a more nuanced understanding of how signals propagate through the network.",
                "paper-title": "Matrix-weighted networks for modeling multidimensional dynamics",
                "image-path": "flux_paper_image/2410.05188_1728609667.png"
            },

            {
                "startTime": "19:22",
                "arxivId": "2410.05589",
                "arxivLink": "https://arxiv.org/abs/2410.05589",
                "title": "Parallel Decoding: LLMs Get a Speed Boost with a Multi-Token Drafting Trick",
                "institute": "Rice University, Tencent AI Lab, University of Illinois Urbana-Champaign",
                "text": "This research introduces PARALLELSPEC, a new method for speculative decoding that uses a single model to predict multiple future tokens in parallel during the drafting stage. This differs from previous approaches that draft tokens auto-regressively, which can be computationally expensive.",
                "paper-title": "ParallelSpec: Parallel Drafter for Efficient Speculative Decoding",
                "image-path": "flux_paper_image/2410.05589_1728607366.png"
            },

            {
                "startTime": "19:46",
                "arxivId": "2410.07069",
                "arxivLink": "https://arxiv.org/abs/2410.07069",
                "title": "LLMs as Graders: A Meta-Evaluation of Instruction-Following Tests",
                "institute": "Yale University",
                "text": "This research goes beyond evaluating individual LLMs' ability to follow instructions. It focuses on the evaluation methods themselves, testing how well different protocols work across a wide range of LLMs.",
                "paper-title": "ReIFE: Re-evaluating Instruction-Following Evaluation",
                "image-path": "flux_paper_image/2410.07069_1728607479.png"
            },

            {
                "startTime": "20:08",
                "arxivId": "2410.05248",
                "arxivLink": "https://arxiv.org/abs/2410.05248",
                "title": "LLMs: From Clueless to Confident with a Mixup Recipe!",
                "institute": "MIT",
                "text": "This research proposes SFTMix, a novel instruction-tuning recipe for LLMs that leverages training dynamics to identify data subsets with varying confidence levels and incorporates a Mixup-based regularization to improve performance. Unlike previous work that focuses on improving the quality of instruction-tuning datasets, SFTMix aims to optimize data utilization through insightful data interpretation and enhance the effectiveness of instruction tuning beyond the conventional NTP paradigm.",
                "paper-title": "SFTMix: Elevating Language Model Instruction Tuning with Mixup Recipe",
                "image-path": "flux_paper_image/2410.05248_1728607131.png"
            },

            {
                "startTime": "20:30",
                "arxivId": "2410.06560",
                "arxivLink": "https://arxiv.org/abs/2410.06560",
                "title": "Weather Forecasting Gets a Physics-Fueled Makeover: A Sandwich of Neural Networks for More Accurate Predictions!",
                "institute": "Tsinghua University, Alibaba",
                "text": "This research introduces WeatherODE, a novel one-stage, physics-driven ordinary differential equation (ODE) model for weather forecasting. Unlike previous methods that rely on fixed time intervals, WeatherODE leverages wave equation theory and a time-dependent source model to address the challenges associated with time-discretization error and dynamic atmospheric processes.",
                "paper-title": "Mitigating Time Discretization Challenges with WeatherODE: A Sandwich Physics-Driven Neural ODE for Weather Forecasting",
                "image-path": "flux_paper_image/2410.06560_1728605625.png"
            },

            {
                "startTime": "20:47",
                "arxivId": "2410.05514",
                "arxivLink": "https://arxiv.org/abs/2410.05514",
                "title": "Mapping the World, One Fuzzy Object at a Time: Diffusion Models Make 3D Reconstruction a Breeze",
                "institute": "University of Toronto",
                "text": "This research introduces a new method for object-level mapping that leverages a pre-trained diffusion model as a shape prior. Unlike previous methods that rely on dense observations or single-category models, this approach can reconstruct 3D objects from sparse views and handle multiple object categories.",
                "paper-title": "Toward General Object-level Mapping from Sparse Views with 3D Diffusion Priors",
                "image-path": "flux_paper_image/2410.05514_1728605676.png"
            },

            {
                "startTime": "21:14",
                "arxivId": "2410.06949",
                "arxivLink": "https://arxiv.org/abs/2410.06949",
                "title": "LLMs Get a Helping Hand: Multi-Agent Framework Makes Code More Robust",
                "institute": "ByteDance, Tsinghua University, Beihang University",
                "text": "This research proposes a multi-agent framework called Seeker to enhance exception handling in code generated by LLMs. Unlike previous work that focuses on general code generation, Seeker specifically addresses the challenges of detecting, capturing, and handling exceptions in code.",
                "paper-title": "Seeker: Enhancing Exception Handling in Code with LLM-based Multi-Agent Approach",
                "image-path": "flux_paper_image/2410.06949_1728608095.png"
            },

            {
                "startTime": "21:41",
                "arxivId": "2410.04619",
                "arxivLink": "https://arxiv.org/abs/2410.04619",
                "title": "Social Media's Secret Currency: Likes, Shares, and the Invisible Hand of Influence",
                "institute": "University of Hong Kong, University of Toronto",
                "text": "This research distinguishes itself by formally modeling social support as a currency within a content market, exploring its impact on market equilibrium and social welfare. It also examines the dual role of influencers as content aggregators and information proxies for social support, a facet not previously explored in depth.",
                "paper-title": "The Role of Social Support and Influencers in Social Media Communities",
                "image-path": "flux_paper_image/2410.04619_1728605880.png"
            },

            {
                "startTime": "22:01",
                "arxivId": "2410.06231",
                "arxivLink": "https://arxiv.org/abs/2410.06231",
                "title": "RelitLRM: Relighting 3D Objects with a Dash of Diffusion Magic!",
                "institute": "Massachusetts Institute of Technology, Stanford University, Cornell University...",
                "text": "This research introduces RelitLRM, a generative model that reconstructs relightable 3D objects from sparse images. Unlike previous methods that rely on dense captures and slow optimization, RelitLRM uses a transformer-based architecture with a diffusion-based appearance generator, enabling efficient and high-quality relighting.",
                "paper-title": "RelitLRM: Generative Relightable Radiance for Large Reconstruction Models",
                "image-path": "flux_paper_image/2410.06231_1728606942.png"
            },

            {
                "startTime": "22:27",
                "arxivId": "2410.05352",
                "arxivLink": "https://arxiv.org/abs/2410.05352",
                "title": "Multimodal Continual Learning: When AI Gets a Memory Upgrade!",
                "institute": "Chinese University of Hong Kong, Tsinghua University, University of Illinois at Chicago",
                "text": "This research paper presents the first comprehensive survey on multimodal continual learning (MMCL), a field that focuses on training AI models to learn from new data without forgetting previous knowledge, especially when dealing with multiple data types like images, text, and audio.",
                "paper-title": "Recent Advances of Multimodal Continual Learning: A Comprehensive Survey",
                "image-path": "flux_paper_image/2410.05352_1728606020.png"
            },

            {
                "startTime": "22:53",
                "arxivId": "2410.06024",
                "arxivLink": "https://arxiv.org/abs/2410.06024",
                "title": "Unleashing the Hidden Language of LLMs: Jet Expansion Reveals the Secrets of Deep Learning",
                "institute": "University College London, MIT, Amazon",
                "text": "This research introduces a novel framework called \"jet expansion\" to analyze the computational graphs of neural networks, particularly deep residual networks. Unlike previous methods that rely on datasets or specific assumptions about the model, jet expansion operates directly on the model's functions, enabling data-free analysis.",
                "paper-title": "Jet Expansions of Residual Computation",
                "image-path": "flux_paper_image/2410.06024_1728606794.png"
            },

            {
                "startTime": "23:17",
                "arxivId": "2410.05690",
                "arxivLink": "https://arxiv.org/abs/2410.05690",
                "title": "Long-Context Learning: No Mixing, Just Magic!",
                "institute": "EPFL, Inria, ENS",
                "text": "This paper tackles the problem of identifying linear systems with long-term dependencies, extending previous work that focused solely on first-order dependencies. It establishes a sample complexity bound that matches the i.i.d. parametric rate, revealing a \"learning-without-mixing\" phenomenon.",
                "paper-title": "Long-Context Linear System Identification",
                "image-path": "flux_paper_image/2410.05690_1728605589.png"
            },

            {
                "startTime": "23:40",
                "arxivId": "2410.04541",
                "arxivLink": "https://arxiv.org/abs/2410.04541",
                "title": "LLMs: Function Modeling Wizards or Data Dummies? A Bayesian Perspective",
                "institute": "University of Cambridge, Microsoft, The Alan Turing Institute",
                "text": "This research proposes a novel evaluation framework for assessing LLMs' function modeling capabilities. It separates the model's ability to understand raw data patterns from its ability to incorporate domain knowledge, providing a more nuanced understanding of LLM performance.",
                "paper-title": "On Evaluating LLMs' Capabilities as Functional Approximators: A Bayesian Perspective",
                "image-path": "flux_paper_image/2410.04541_1728606752.png"
            },

            {
                "startTime": "24:07",
                "arxivId": "2410.05255",
                "arxivLink": "https://arxiv.org/abs/2410.05255",
                "title": "Diffusion Models Get a Preference Makeover: No Reward Models Needed!",
                "institute": "University of Rochester, Purdue University, Yonsei University...",
                "text": "This research proposes a new method called Semi-Policy Preference Optimization (SePPO) for aligning diffusion models with human preferences. Unlike previous methods that rely on reward models or paired human-annotated data, SePPO leverages previous checkpoints as reference models to generate on-policy reference samples, effectively replacing \"losing images\" in preference pairs. This allows the model to learn from only off-policy \"winning images.\"",
                "paper-title": "SePPO: Semi-Policy Preference Optimization for Diffusion Alignment",
                "image-path": "flux_paper_image/2410.05255_1728609737.png"
            },

            {
                "startTime": "24:42",
                "arxivId": "2410.05481",
                "arxivLink": "https://arxiv.org/abs/2410.05481",
                "title": "LLMs Learn to Tag Text Like a Boss: fPLSA Uncovers Hidden Semantic Structures",
                "institute": "Microsoft",
                "text": "This research introduces fPLSA, a method that uses foundation models to learn latent semantic structures in document collections by iteratively clustering and tagging document segments based on document-level contexts. This differs from previous work by incorporating document-level context into the tagging process, which allows for more nuanced and informative tags.",
                "paper-title": "fPLSA: Learning Semantic Structures in Document Collections Using Foundation Models",
                "image-path": "flux_paper_image/2410.05481_1728607544.png"
            },

            {
                "startTime": "25:05",
                "arxivId": "2410.05613",
                "arxivLink": "https://arxiv.org/abs/2410.05613",
                "title": "Chatbots Can't Hide Their Racial Biases: A Study Reveals the Shocking Truth",
                "institute": "CMU",
                "text": "This research goes beyond previous work by examining how large language models (LLMs) generate recommendations based on both explicit and implicit signals of a user's race, even when the user doesn't intend to reveal their identity.",
                "paper-title": "Stereotype or Personalization? User Identity Biases Chatbot Recommendations",
                "image-path": "flux_paper_image/2410.05613_1728609985.png"
            },

            {
                "startTime": "25:24",
                "arxivId": "2410.06731",
                "arxivLink": "https://arxiv.org/abs/2410.06731",
                "title": "Weather Forecasting Gets a Grid-Based Makeover: Transformers Tackle Unstructured Data",
                "institute": "University of Cambridge",
                "text": "This research introduces a new approach to handling unstructured data in spatio-temporal modeling, specifically for weather forecasting. Unlike previous methods that rely on structured grids, this paper proposes a \"pseudo-token grid encoder\" that efficiently encodes unstructured data onto a grid, enabling the use of efficient attention mechanisms in transformer-based architectures.",
                "paper-title": "Gridded Transformer Neural Processes for Large Unstructured Spatio-Temporal Data",
                "image-path": "flux_paper_image/2410.06731_1728606799.png"
            },

            {
                "startTime": "25:42",
                "arxivId": "2410.05975",
                "arxivLink": "https://arxiv.org/abs/2410.05975",
                "title": "Meta-Learning Gets a Makeover: ConML Makes Models Think Like Humans!",
                "institute": "Tsinghua University, Hong Kong University of Science and Technology",
                "text": "This research introduces ConML, a meta-learning framework that uses task-level contrastive learning to improve model alignment and discrimination. Unlike previous work, ConML doesn't rely on specific model architectures or target models, making it universally applicable.",
                "paper-title": "ConML: A Universal Meta-Learning Framework with Task-Level Contrastive Learning",
                "image-path": "flux_paper_image/2410.05975_1728607511.png"
            },

            {
                "startTime": "26:07",
                "arxivId": "2410.04810",
                "arxivLink": "https://arxiv.org/abs/2410.04810",
                "title": "One-Shot Federated Learning Gets a Diffusion Makeover: Personalized Data Synthesis for Privacy-Preserving AI!",
                "institute": "Ludwig Maximilian University of Munich, Siemens Technology, University of Oxford...",
                "text": "This research proposes a novel method called FedBiP, which personalizes a pretrained Latent Diffusion Model (LDM) to generate synthetic data that aligns with the specific data distributions of individual clients in a One-Shot Federated Learning (OSFL) setting. This approach addresses the challenges of feature space heterogeneity and limited data quantity in OSFL, which are often overlooked by existing methods.",
                "paper-title": "FedBiP: Heterogeneous One-Shot Federated Learning with Personalized Latent Diffusion Models",
                "image-path": "flux_paper_image/2410.04810_1728608191.png"
            },

            {
                "startTime": "26:37",
                "arxivId": "2410.04775",
                "arxivLink": "https://arxiv.org/abs/2410.04775",
                "title": "Tiny Tech, Big Brains: Earbuds Get Smart with On-Device AI",
                "institute": "Nokia Bell Labs",
                "text": "This research introduces OmniBuds, an earable platform that integrates multiple biosensors and onboard computation powered by a machine learning accelerator, all within a real-time operating system (RTOS). Unlike conventional earables that rely on external data processing, OmniBuds leverage real-time onboard computation to significantly enhance system efficiency, reduce latency, and safeguard privacy by processing data locally.",
                "paper-title": "OmniBuds: A Sensory Earable Platform for Advanced Bio-Sensing and On-Device Machine Learning",
                "image-path": "flux_paper_image/2410.04775_1728606048.png"
            },

            {
                "startTime": "26:57",
                "arxivId": "2410.06735",
                "arxivLink": "https://arxiv.org/abs/2410.06735",
                "title": "Code-Trained LLMs: Smarter Than They Look?",
                "institute": "University of Tokyo",
                "text": "This research directly compares the performance of LLMs trained solely on programming languages to those trained on natural language datasets, focusing on logical inference tasks. Previous work often used mixed datasets or didn't conduct fair comparisons.",
                "paper-title": "Which Programming Language and What Features at Pre-training Stage Affect Downstream Logical Inference Performance?",
                "image-path": "flux_paper_image/2410.06735_1728604951.png"
            },

            {
                "startTime": "27:19",
                "arxivId": "2410.05102",
                "arxivLink": "https://arxiv.org/abs/2410.05102",
                "title": "LLMs Get a Makeover: Sparse Token Masks for Smarter AI!",
                "institute": "Huawei, University College London",
                "text": "This research introduces SparsePO, a method that learns to selectively weight the importance of individual tokens during preference optimization, allowing for more flexible and diverse responses. Unlike previous methods that focus on the entire sequence, SparsePO focuses on specific words or phrases that are crucial for conveying the desired preference.",
                "paper-title": "SparsePO: Controlling Preference Alignment of LLMs via Sparse Token Masks",
                "image-path": "flux_paper_image/2410.05102_1728604717.png"
            },

            {
                "startTime": "27:44",
                "arxivId": "2410.05534",
                "arxivLink": "https://arxiv.org/abs/2410.05534",
                "title": "Tensor Optimization: MCTS to the Rescue!",
                "institute": "University of Cambridge",
                "text": "This research introduces a novel approach to optimizing tensor computation graphs using Monte Carlo Tree Search (MCTS) during the construction phase of equality saturation. This differs from previous work that relied on sequential application of rewrite rules, which could lead to suboptimal results due to the phase-ordering problem.",
                "paper-title": "Optimizing Tensor Computation Graphs with Equality Saturation and Monte Carlo Tree Search",
                "image-path": "flux_paper_image/2410.05534_1728607723.png"
            },

            {
                "startTime": "28:02",
                "arxivId": "2410.06112",
                "arxivLink": "https://arxiv.org/abs/2410.06112",
                "title": "Predicting Packet Latency: Transformers to the Rescue!",
                "institute": "The University of Chicago",
                "text": "This research introduces SwiftQueue, a novel L4S queue selection system that uses a custom Transformer to predict packet-level latency. Unlike previous work that focuses on flow-level latency prediction, SwiftQueue aims to predict latency variations at the individual packet level.",
                "paper-title": "SwiftQueue: Optimizing Low-Latency Applications with Swift Packet Queuing",
                "image-path": "flux_paper_image/2410.06112_1728608413.png"
            },

            {
                "startTime": "28:24",
                "arxivId": "2410.06875",
                "arxivLink": "https://arxiv.org/abs/2410.06875",
                "title": "Shapley Values: The Fair Way to Explain Counterfactual Simulations",
                "institute": "Columbia University, University of Chicago",
                "text": "This paper introduces the \"group Shapley value\" to interpret counterfactual simulations in structural economic models. Unlike previous work that focuses on individual parameters, this method quantifies the importance of groups of parameters, providing a more comprehensive understanding of model outcomes.",
                "paper-title": "Group Shapley Value and Counterfactual Simulations in a Structural Model",
                "image-path": "flux_paper_image/2410.06875_1728607924.png"
            },

            {
                "startTime": "28:47",
                "arxivId": "2410.06415",
                "arxivLink": "https://arxiv.org/abs/2410.06415",
                "title": "AI's Got Opinions: How Biased Chatbots Sway Your Political Views",
                "institute": "University of Washington",
                "text": "This study investigates the impact of partisan bias in AI language models on human political decision-making, going beyond previous research that focused on static AI-generated content or inconsequential decisions. It examines how dynamic interactions with biased AI models influence opinions and choices in a more realistic setting.",
                "paper-title": "Biased AI can Influence Political Decision-Making",
                "image-path": "flux_paper_image/2410.06415_1728608566.png"
            },

            {
                "startTime": "29:15",
                "arxivId": "2410.05260",
                "arxivLink": "https://arxiv.org/abs/2410.05260",
                "title": "Text-to-Motion: Turning Words into Walking, Talking Avatars!",
                "institute": "ETH Z\u00fcrich",
                "text": "This research introduces DART, a diffusion-based model that generates continuous, long-term human motion sequences in real-time, conditioned on text prompts. Unlike previous methods that focus on short, isolated motions, DART leverages motion primitives to enable online generation and control.",
                "paper-title": "DART: A Diffusion-Based Autoregressive Motion Model for Real-Time Text-Driven Motion Control",
                "image-path": "flux_paper_image/2410.05260_1728605831.png"
            },

            {
                "startTime": "29:34",
                "arxivId": "2410.06511",
                "arxivLink": "https://arxiv.org/abs/2410.06511",
                "title": "TorchTitan: LLM Training Gets a PyTorch-Powered Makeover!",
                "institute": "Meta",
                "text": "This paper introduces TorchTitan, a PyTorch-native distributed training system that unifies and advances state-of-the-art techniques for large language model (LLM) pre-training. Unlike existing solutions, TorchTitan offers a modular and composable approach, enabling seamless integration of 3D parallelism and hardware-software co-designed solutions.",
                "paper-title": "TorchTitan: One-stop PyTorch native solution for production ready LLM pre-training",
                "image-path": "flux_paper_image/2410.06511_1728607583.png"
            },

            {
                "startTime": "30:05",
                "arxivId": "2410.05462",
                "arxivLink": "https://arxiv.org/abs/2410.05462",
                "title": "Attention, Please! New Algorithm Makes Transformers Super-Efficient",
                "institute": "Indian Institute of Science, Google, CMU",
                "text": "This paper introduces a novel approach to attention mechanisms in transformers, focusing on identifying and utilizing a \"universal set\" of keys. This differs from previous work by not relying on sparsity constraints, low-rank assumptions, or bounded entries.",
                "paper-title": "LevAttention: Time, Space, and Streaming Efficient Algorithm for Heavy Attentions",
                "image-path": "flux_paper_image/2410.05462_1728605800.png"
            },

            {
                "startTime": "30:32",
                "arxivId": "2410.05143",
                "arxivLink": "https://arxiv.org/abs/2410.05143",
                "title": "Sidekick for Science: Diffusion Models Get a Multimodal Makeover",
                "institute": "CMU, Air Force Research Laboratory",
                "text": "This research proposes a novel approach to accelerate imaging by leveraging side information from an auxiliary modality. Unlike previous methods that rely on differentiable forward models, this study trains a multimodal diffusion model to capture the joint distribution of different modalities, effectively turning the inverse problem into a linear inpainting problem.",
                "paper-title": "Leveraging Multimodal Diffusion Models to Accelerate Imaging with Side Information",
                "image-path": "flux_paper_image/2410.05143_1728606391.png"
            },

            {
                "startTime": "30:56",
                "arxivId": "2410.05650",
                "arxivLink": "https://arxiv.org/abs/2410.05650",
                "title": "Shape-Shifting AI: How a New Adapter Makes Object Detection See the World Differently",
                "institute": "Peking University, University of Science and Technology Beijing",
                "text": "This research focuses on the \"image-region gap\" in open-vocabulary detection (OVD), a problem where models struggle to accurately classify objects within images because of how regions are extracted. The paper proposes a Shape-Invariant Adapter (SIA) that learns to adjust region features based on their shapes, bridging this gap and improving classification accuracy. This approach differs from previous work by directly addressing the shape deformation issue rather than relying on knowledge distillation or fine-tuning.",
                "paper-title": "SIA-OVD: Shape-Invariant Adapter for Bridging the Image-Region Gap in Open-Vocabulary Detection",
                "image-path": "flux_paper_image/2410.05650_1728604834.png"
            },

            {
                "startTime": "31:20",
                "arxivId": "2410.06494",
                "arxivLink": "https://arxiv.org/abs/2410.06494",
                "title": "Conformal Prediction: Data's New Best Friend?",
                "institute": "UC Los Angeles, University of Chicago, University of Illinois at Chicago",
                "text": "This research provides a comprehensive overview of conformal prediction (CP) methods from a data-centric perspective, categorizing CP approaches based on different data types, including structured, unstructured, and dynamic data. This approach differs from previous surveys that focused on theoretical foundations or specific data types.",
                "paper-title": "Conformal Prediction: A Data Perspective",
                "image-path": "flux_paper_image/2410.06494_1728608955.png"
            },

            {
                "startTime": "31:43",
                "arxivId": "2410.04523",
                "arxivLink": "https://arxiv.org/abs/2410.04523",
                "title": "Sea-Sick Helicopters? New Plan Uses Boats to Speed Up Patient Evac!",
                "institute": "Stanford University, University of Massachusetts",
                "text": "This research introduces a novel approach to medical evacuation in maritime environments by utilizing underway watercraft as intermediary exchange points between aircraft. This differs from previous work that focused solely on fixed land-based exchange points or direct transfers.",
                "paper-title": "Semi-Markovian Planning to Coordinate Aerial and Maritime Medical Evacuation Platforms",
                "image-path": "flux_paper_image/2410.04523_1728608398.png"
            },

            {
                "startTime": "32:03",
                "arxivId": "2410.05334",
                "arxivLink": "https://arxiv.org/abs/2410.05334",
                "title": "Machine Learning's New Bug Zapper: Human-in-the-Loop Testing for Adversarial Attacks",
                "institute": "University of Oxford",
                "text": "This research introduces an interactive system called TA3 for testing machine learning models against adversarial attacks. Unlike previous work that primarily relies on automated testing and statistical measures, TA3 incorporates human-in-the-loop (HITL) techniques to enable human experts to steer attack simulations and visualize the impact of attacks.",
                "paper-title": "TA3: Testing Against Adversarial Attacks on Machine Learning Models",
                "image-path": "flux_paper_image/2410.05334_1728609561.png"
            },

            {
                "startTime": "32:32",
                "arxivId": "2410.06001",
                "arxivLink": "https://arxiv.org/abs/2410.06001",
                "title": "Typing Without a Keyboard? This Wristband Makes It Possible!",
                "institute": "ETH Z\u00fcrich",
                "text": "This research introduces TapType, a text entry system that uses wristband sensors to detect finger taps on any surface, unlike previous methods that rely on touchscreens or cameras. TapType combines a Bayesian neural network classifier with an n-gram language model to predict the most likely character sequence.",
                "paper-title": "TapType: Ten-finger text entry on everyday surfaces via Bayesian inference",
                "image-path": "flux_paper_image/2410.06001_1728606458.png"
            },

            {
                "startTime": "32:52",
                "arxivId": "2410.05940",
                "arxivLink": "https://arxiv.org/abs/2410.05940",
                "title": "Typing on Air? Nah, TouchInsight Makes Surfaces Your Keyboard!",
                "institute": "Meta Reality Labs, ETH Z\u00fcrich",
                "text": "This research introduces TouchInsight, a method for detecting touch input on surfaces using only egocentric hand tracking. Unlike previous work that relied on external cameras or additional sensors, TouchInsight explicitly models uncertainties in touch location due to both user behavior and sensing inaccuracies.",
                "paper-title": "TouchInsight: Uncertainty-aware Rapid Touch and Text Input for Mixed Reality from Egocentric Vision",
                "image-path": "flux_paper_image/2410.05940_1728609482.png"
            },

            {
                "startTime": "33:11",
                "arxivId": "2410.05760",
                "arxivLink": "https://arxiv.org/abs/2410.05760",
                "title": "Diffusion Models Get a Demon-Powered Upgrade: No Training, Just Better Images!",
                "institute": "Academia Sinica, Google",
                "text": "This research proposes a novel inference-time method called Demon for aligning diffusion models with user preferences without requiring model retraining or backpropagation through reward functions. Unlike previous methods that rely on either retraining or differentiable reward functions, Demon guides the denoising process by controlling the noise distribution during inference.",
                "paper-title": "Training-free Diffusion Model Alignment with Sampling Demons",
                "image-path": "flux_paper_image/2410.05760_1728605343.png"
            },

            {
                "startTime": "33:37",
                "arxivId": "2410.05076",
                "arxivLink": "https://arxiv.org/abs/2410.05076",
                "title": "LLMs Get a Speed Boost: TidalDecode Makes Decoding a Breeze!",
                "institute": "CMU",
                "text": "This research introduces TidalDecode, a new approach to LLM decoding that leverages the spatial coherence of tokens selected for sparse attention. Unlike previous methods that select tokens independently at each layer, TidalDecode reuses the same set of tokens for multiple layers, reducing the overhead of token selection.",
                "paper-title": "TidalDecode: Fast and Accurate LLM Decoding with Position Persistent Sparse Attention",
                "image-path": "flux_paper_image/2410.05076_1728607750.png"
            },

            {
                "startTime": "33:56",
                "arxivId": "2410.05356",
                "arxivLink": "https://arxiv.org/abs/2410.05356",
                "title": "Bots Behaving Badly? New Research Uses Biased Subgraphs to Catch 'Em!",
                "institute": "Peking University",
                "text": "This research proposes a new method called BSG4Bot that uses biased subgraphs to improve the efficiency and accuracy of social bot detection. Unlike previous methods that train on the entire graph, BSG4Bot focuses on smaller, carefully constructed subgraphs that are more likely to contain similar nodes, making it easier for the model to learn patterns.",
                "paper-title": "BSG4Bot: Efficient Bot Detection based on Biased Heterogeneous Subgraphs",
                "image-path": "flux_paper_image/2410.05356_1728608999.png"
            },

            {
                "startTime": "34:23",
                "arxivId": "2410.05224",
                "arxivLink": "https://arxiv.org/abs/2410.05224",
                "title": "Forget Humans, Teach AI with Random Words!",
                "institute": "Stanford University",
                "text": "This research proposes a new framework called COOKBOOK that programmatically generates training data for LLMs using simple patterns over random tokens. This approach differs from previous work that relies on human-generated or LLM-generated data, which can be expensive and time-consuming to curate.",
                "paper-title": "Cookbook: A framework for improving LLM generative abilities via programmatic data generating templates",
                "image-path": "flux_paper_image/2410.05224_1728605353.png"
            },

            {
                "startTime": "34:46",
                "arxivId": "2410.05192",
                "arxivLink": "https://arxiv.org/abs/2410.05192",
                "title": "Training Language Models Like a River: Why Constant Learning Rates Can Be a Good Thing",
                "institute": "Stanford University, Toyota Technological Institute at Chicago",
                "text": "This research introduces a new learning rate schedule called Warmup-Stable-Decay (WSD) that doesn't require a pre-determined compute budget. Unlike traditional cosine schedules, WSD maintains a constant learning rate for a significant portion of training before decaying, leading to a unique loss curve.",
                "paper-title": "Understanding Warmup-Stable-Decay Learning Rates: A River Valley Loss Landscape Perspective",
                "image-path": "flux_paper_image/2410.05192_1728609617.png"
            },

            {
                "startTime": "35:18",
                "arxivId": "2410.06128",
                "arxivLink": "https://arxiv.org/abs/2410.06128",
                "title": "Zero-Shot Learning: Causal Models Get a Mind-Reading Upgrade!",
                "institute": "Microsoft",
                "text": "This research proposes a novel approach to inferring causal models in a zero-shot manner, meaning it can predict the causal relationships in new datasets without needing to be retrained specifically for them. This differs from previous work that required training a separate model for each dataset.",
                "paper-title": "Zero-Shot Learning of Causal Models",
                "image-path": "flux_paper_image/2410.06128_1728605914.png"
            },

            {
                "startTime": "35:40",
                "arxivId": "2410.05804",
                "arxivLink": "https://arxiv.org/abs/2410.05804",
                "title": "Object Detection's New Trick: Sharing Secrets with Language Models!",
                "institute": "Peking University, Peng Cheng Laboratory",
                "text": "This research proposes a novel method for incremental object detection that leverages shared attributes from vision-language foundation models. Unlike previous methods, it focuses on capturing common semantic information across categories, mitigating the issue of background drift.",
                "paper-title": "CASA: Class-Agnostic Shared Attributes in Vision-Language Models for Efficient Incremental Object Detection",
                "image-path": "flux_paper_image/2410.05804_1728606042.png"
            },

            {
                "startTime": "36:01",
                "arxivId": "2410.05577",
                "arxivLink": "https://arxiv.org/abs/2410.05577",
                "title": "Underwater Object Detection: Deep Dive into the Murky World of AI",
                "institute": "University College London, Dalian University of Technology, Ocean University of China...",
                "text": "This research provides a comprehensive review of AI-based underwater object detection (UOD) methods, categorizing them based on learning strategies, datasets, features, and learning stages. It also delves into the unique challenges of UOD, such as image quality degradation, small object detection, noisy labels, and class imbalance, and suggests potential solutions.",
                "paper-title": "Underwater Object Detection in the Era of Artificial Intelligence: Current, Challenge, and Future",
                "image-path": "flux_paper_image/2410.05577_1728607639.png"
            },

            {
                "startTime": "36:20",
                "arxivId": "2410.04612",
                "arxivLink": "https://arxiv.org/abs/2410.04612",
                "title": "Chatbots That Learn to Talk Like Humans: A New Approach to Multi-Turn Conversations",
                "institute": "Cornell University, Princeton University, CMU...",
                "text": "This research introduces REFUEL, a new approach to multi-turn RLHF that addresses the covariate shift problem by iteratively generating on-policy datasets. Unlike previous methods that treat multi-turn tasks as single-turn problems, REFUEL frames the problem as a sequence of regression tasks, enabling efficient policy optimization.",
                "paper-title": "Regressing the Relative Future: Efficient Policy Optimization for Multi-turn RLHF",
                "image-path": "flux_paper_image/2410.04612_1728607609.png"
            },

            {
                "startTime": "36:43",
                "arxivId": "2410.04734",
                "arxivLink": "https://arxiv.org/abs/2410.04734",
                "title": "Token-Level Detective: Unmasking Hallucinations in Vision Language Models",
                "institute": "University of Southern California, Meta",
                "text": "This research introduces a Token-Level Detective Reward (TLDR) model, which provides fine-grained annotations for each token in a vision language model's output, unlike traditional reward models that only provide a single score for the entire response.",
                "paper-title": "TLDR: Token-Level Detective Reward Model for Large Vision Language Models",
                "image-path": "flux_paper_image/2410.04734_1728607518.png"
            },

            {
                "startTime": "37:07",
                "arxivId": "2410.06781",
                "arxivLink": "https://arxiv.org/abs/2410.06781",
                "title": "Fake It Till You Make It: Generating Realistic TEE Images with Anatomical Models",
                "institute": "University of Oxford",
                "text": "This research extends a previous pipeline for generating synthetic transthoracic echocardiography (TTE) images to create synthetic transesophageal echocardiography (TEE) images. The new pipeline generates 19 standard TEE views, which is a significant improvement over the previous work that only generated two views.",
                "paper-title": "Transesophageal Echocardiography Generation Using Anatomical Models",
                "image-path": "flux_paper_image/2410.06781_1728606591.png"
            },

            {
                "startTime": "37:36",
                "arxivId": "2410.06997",
                "arxivLink": "https://arxiv.org/abs/2410.06997",
                "title": "X-ray to MRI: Turning Bones into Brains with AI!",
                "institute": "University of Orl\u00e9ans, Harvard University",
                "text": "This research proposes a novel diffusion-based model, Xray2MRI, that generates pseudo-MRI volumes from a single X-ray image. Unlike previous work, this model integrates target depth, KOA probability distribution, and image intensity distribution modules to guide the synthesis process, ensuring that the generated corresponding slices accurately correspond to the anatomical structures.",
                "paper-title": "A Diffusion-based Xray2MRI Model: Generating Pseudo-MRI Volumes From one Single X-ray",
                "image-path": "flux_paper_image/2410.06997_1728609604.png"
            },

            {
                "startTime": "38:08",
                "arxivId": "2410.04960",
                "arxivLink": "https://arxiv.org/abs/2410.04960",
                "title": "Segment Anything, Faster: A Survey of SAM's Speed Demons",
                "institute": "UESTC, Lancaster University, Tongji University",
                "text": "This survey focuses specifically on the development of efficient Segment Anything Model (SAM) variants, a topic not addressed in previous surveys. It categorizes these variants based on their acceleration strategies and provides a comprehensive evaluation of their efficiency and accuracy.",
                "paper-title": "On Efficient Variants of Segment Anything Model: A Survey",
                "image-path": "flux_paper_image/2410.04960_1728606561.png"
            },

            {
                "startTime": "38:34",
                "arxivId": "2410.05497",
                "arxivLink": "https://arxiv.org/abs/2410.05497",
                "title": "QR Codes Go Hands-Free: New Tech Makes Scanning a Breeze!",
                "institute": "Meta",
                "text": "This research focuses on adapting QR code reading to egocentric settings, specifically for wearable devices. Unlike phone-based QR code readers, this system accounts for the unique challenges of egocentric images, such as wider field of view, code distortion, and motion blur.",
                "paper-title": "EgoQR: Efficient QR Code Reading in Egocentric Settings",
                "image-path": "flux_paper_image/2410.05497_1728606079.png"
            },

            {
                "startTime": "38:54",
                "arxivId": "2410.04803",
                "arxivLink": "https://arxiv.org/abs/2410.04803",
                "title": "Time Series Forecasting Gets a Long-Term Memory Boost!",
                "institute": "Tsinghua University",
                "text": "This research introduces a new approach to time series forecasting called \"multivariate next token prediction.\" Unlike previous methods that focus on individual time series, this approach considers multiple time series simultaneously, capturing complex dependencies between them.",
                "paper-title": "Timer-XL: Long-Context Transformers for Unified Time Series Forecasting",
                "image-path": "flux_paper_image/2410.04803_1728606311.png"
            },

            {
                "startTime": "39:20",
                "arxivId": "2410.05044",
                "arxivLink": "https://arxiv.org/abs/2410.05044",
                "title": "Fusing 3D Models: When Robots Need a Group Hug!",
                "institute": "CMU",
                "text": "This research introduces PhotoReg, a framework that uses 3D foundation models to align multiple 3D Gaussian Splatting (3DGS) models, addressing the challenge of merging these models into a single coherent representation. This approach differs from previous work by leveraging the duality between photorealistic reconstructions and 3D foundation models, enabling robust alignment even with minimal overlap between the models.",
                "paper-title": "PhotoReg: Photometrically Registering 3D Gaussian Splatting Models",
                "image-path": "flux_paper_image/2410.05044_1728607328.png"
            },

            {
                "startTime": "39:44",
                "arxivId": "2410.05273",
                "arxivLink": "https://arxiv.org/abs/2410.05273",
                "title": "Robot Brains Get a Speed Boost: Hierarchical Transformers for Faster, Smarter Robots",
                "institute": "Tsinghua University, UC Berkeley",
                "text": "This research proposes HiRT, a hierarchical framework for robotic control that uses a large vision-language model (VLM) to extract high-level information and a lightweight action policy to react quickly to changes in the environment. This approach differs from previous VLA models that rely solely on large VLMs for both understanding and action generation, leading to slower inference speeds.",
                "paper-title": "HiRT: Enhancing Robotic Control with Hierarchical Robot Transformers",
                "image-path": "flux_paper_image/2410.05273_1728610058.png"
            },

            {
                "startTime": "40:09",
                "arxivId": "2410.06615",
                "arxivLink": "https://arxiv.org/abs/2410.06615",
                "title": "Stop Saying \"I'm 90% Sure!\" New Research Makes AI Confidence Scores More Reliable",
                "institute": "University of Amsterdam, Amazon, Carnegie Mellon University",
                "text": "This research introduces a new concept called \"\u03b2-calibration\" to improve the reliability of confidence scores generated by language models in question-answering systems. Unlike traditional calibration methods that focus on average accuracy, \u03b2-calibration ensures that confidence scores are accurate across different groups of questions and answers.",
                "paper-title": "$\beta$-calibration of Language Model Confidence Scores for Generative QA",
                "image-path": "flux_paper_image/2410.06615_1728608734.png"
            },

            {
                "startTime": "40:32",
                "arxivId": "2410.04715",
                "arxivLink": "https://arxiv.org/abs/2410.04715",
                "title": "LLMs Get a Data Diet: Orthogonal Rules for Better Language Models",
                "institute": "Harvard University",
                "text": "This research introduces a novel rule-based framework for selecting high-quality data for training LLMs. Unlike previous methods that rely heavily on human heuristics, this approach leverages LLMs to automatically generate and evaluate rules, using a metric based on the orthogonality of score vectors.",
                "paper-title": "Rule-based Data Selection for Large Language Models",
                "image-path": "flux_paper_image/2410.04715_1728605416.png"
            },

            {
                "startTime": "40:59",
                "arxivId": "2410.06703",
                "arxivLink": "https://arxiv.org/abs/2410.06703",
                "title": "Web Agents on Trial: New Benchmark Tests Their Trustworthiness",
                "institute": "IBM",
                "text": "This research introduces ST-WebAgentBench, a new benchmark specifically designed to evaluate the safety and trustworthiness of web agents in enterprise contexts. Unlike previous benchmarks, ST-WebAgentBench not only focuses on task completion but also evaluates adherence to organizational policies, avoidance of unsafe actions, and the agent\u2019s ability to maintain user trust.",
                "paper-title": "ST-WebAgentBench: A Benchmark for Evaluating Safety and Trustworthiness in Web Agents",
                "image-path": "flux_paper_image/2410.06703_1728606863.png"
            },

            {
                "startTime": "41:16",
                "arxivId": "2410.05533",
                "arxivLink": "https://arxiv.org/abs/2410.05533",
                "title": "Persuasion Without a Clue: How to Convince When You Don't Know the Odds",
                "institute": "Harvard University, Boston University",
                "text": "This paper explores repeated persuasion problems where the information designer doesn't know the prior distribution of the state of the world. Unlike previous work that considers a static setting with a worst-case prior, this paper takes an online learning approach, allowing the information designer to learn and adapt over time.",
                "paper-title": "Information Design with Unknown Prior",
                "image-path": "flux_paper_image/2410.05533_1728609591.png"
            },

            {
                "startTime": "41:34",
                "arxivId": "2410.06572",
                "arxivLink": "https://arxiv.org/abs/2410.06572",
                "title": "Deepfake Voices: Can We Tell Real From Fake?",
                "institute": "Duke University, Google",
                "text": "This research focuses on active malicious attacks against synthetic speech detectors (SSDs), unlike previous work that focused on natural perturbations. It systematically studies the effectiveness and stealthiness of these attacks under different levels of access to the SSD model.",
                "paper-title": "Can DeepFake Speech be Reliably Detected?",
                "image-path": "flux_paper_image/2410.06572_1728608263.png"
            },

            {
                "startTime": "41:54",
                "arxivId": "2410.04738",
                "arxivLink": "https://arxiv.org/abs/2410.04738",
                "title": "Diffusion Models in 3D Vision: A Wild Ride Through the Latest Research",
                "institute": "Tokyo Institute of Technology, University of Tokyo",
                "text": "This research provides a comprehensive survey of diffusion models applied to 3D vision tasks, highlighting their advantages and limitations, and discussing key techniques, frameworks, and methodologies used to adapt diffusion models for 3D data.",
                "paper-title": "Diffusion Models in 3D Vision: A Survey",
                "image-path": "flux_paper_image/2410.04738_1728605818.png"
            },

            {
                "startTime": "42:15",
                "arxivId": "2410.06541",
                "arxivLink": "https://arxiv.org/abs/2410.06541",
                "title": "\"Chip-Tuning: Pruning LLMs Before They Get Too Big for Their Britches\"",
                "institute": "Peking University, Tencent",
                "text": "This research proposes a new structured pruning method called \"chip-tuning\" that focuses on training probing classifiers on specific layers of LLMs for classification tasks. Unlike previous methods that aim for general pruning, chip-tuning targets task-specific pruning, allowing for more aggressive pruning while maintaining performance.",
                "paper-title": "Chip-Tuning: Classify Before Language Models Say",
                "image-path": "flux_paper_image/2410.06541_1728606517.png"
            },

            {
                "startTime": "42:40",
                "arxivId": "2410.06795",
                "arxivLink": "https://arxiv.org/abs/2410.06795",
                "title": "Vision Models Hallucinating? Virtual Tokens to the Rescue!",
                "institute": "Chinese Academy of Sciences, Renmin University of China, Tsinghua University...",
                "text": "This research focuses on the root cause of object hallucinations in vision-language models (VLMs), proposing that the issue stems from inadequate decoupling of visual features during multi-modal integration. The paper introduces a novel tuning strategy called PATCH, which utilizes trainable virtual tokens to bridge the semantic gap between visual features and text, effectively mitigating hallucinations. This approach differs from previous work by directly addressing the feature decoupling problem, rather than solely focusing on data distribution, training schemes, or decoding strategies.",
                "paper-title": "From Pixels to Tokens: Revisiting Object Hallucinations in Large Vision-Language Models",
                "image-path": "flux_paper_image/2410.06795_1728608714.png"
            },

            {
                "startTime": "43:08",
                "arxivId": "2410.04520",
                "arxivLink": "https://arxiv.org/abs/2410.04520",
                "title": "Neural Ensemblers: Dropping Models for Better Predictions",
                "institute": "University of Freiburg",
                "text": "This research proposes a novel post-hoc ensembling method using neural networks that dynamically assigns weights to base models on a per-instance basis. Unlike traditional approaches, it introduces a regularization technique that randomly drops base model predictions during training, which theoretically enhances ensemble diversity.",
                "paper-title": "Dynamic Post-Hoc Neural Ensemblers",
                "image-path": "flux_paper_image/2410.04520_1728606625.png"
            },

            {
                "startTime": "43:35",
                "arxivId": "2410.05159",
                "arxivLink": "https://arxiv.org/abs/2410.05159",
                "title": "Privacy Panic! New Tool Tests How Easily Hackers Can Steal Your Data",
                "institute": "Harbin Institute of Technology, Tsinghua University",
                "text": "This research introduces MIBench, the first comprehensive benchmark for model inversion attacks and defenses. Unlike previous work, MIBench provides a unified framework for comparing different attack methods and defense strategies under standardized experimental setups.",
                "paper-title": "MIBench: A Comprehensive Benchmark for Model Inversion Attack and Defense",
                "image-path": "flux_paper_image/2410.05159_1728605021.png"
            },

            {
                "startTime": "43:55",
                "arxivId": "2410.05814",
                "arxivLink": "https://arxiv.org/abs/2410.05814",
                "title": "Model Inversion Attacks: They're Trying to Steal Your Face!",
                "institute": "Harbin Institute of Technology, Tsinghua University, South China University of Technology",
                "text": "This research delves into the inherent weaknesses of Model Inversion Attacks (MIAs) and proposes a new defense framework called CALoR. Unlike previous defenses, CALoR integrates Confidence Adaptation and Low-Rank compression strategies to comprehensively address the vulnerabilities of MIAs.",
                "paper-title": "CALoR: Towards Comprehensive Model Inversion Defense",
                "image-path": "flux_paper_image/2410.05814_1728609511.png"
            },

            {
                "startTime": "44:26",
                "arxivId": "2410.06307",
                "arxivLink": "https://arxiv.org/abs/2410.06307",
                "title": "Restless Bandits: MPC is Almost Optimal, But Don't Get Too Excited!",
                "institute": "French Institute for Research in Computer Science and Automation",
                "text": "This paper explores the use of Model Predictive Control (MPC) for restless bandits, a type of problem where multiple tasks compete for limited resources. Unlike previous work that focused on steering the system towards an optimal fixed point, this research leverages the concept of dissipativity to show that a simple MPC algorithm with a finite planning horizon can achieve near-optimal performance.",
                "paper-title": "Model Predictive Control is Almost Optimal for Restless Bandit",
                "image-path": "flux_paper_image/2410.06307_1728605043.png"
            },

            {
                "startTime": "44:54",
                "arxivId": "2410.04772",
                "arxivLink": "https://arxiv.org/abs/2410.04772",
                "title": "AI Audits: Peek Inside the Black Box, But Don't Break It!",
                "institute": "Stanford University, MIT",
                "text": "This research focuses on the type and amount of access auditors need to effectively evaluate AI systems. It proposes that black-box access, where auditors can query the model without seeing its internal workings, is minimally necessary for meaningful audits.",
                "paper-title": "From Transparency to Accountability and Back: A Discussion of Access and Evidence in AI Auditing",
                "image-path": "flux_paper_image/2410.04772_1728607496.png"
            },

            {
                "startTime": "45:21",
                "arxivId": "2410.06213",
                "arxivLink": "https://arxiv.org/abs/2410.06213",
                "title": "Don't Do Anything I Mightn't Do: Why KL Regularization Fails in RL",
                "institute": "UC Berkeley, Montreal Institute for Learning Algorithms",
                "text": "This paper explores the limitations of KL regularization when used to control the behavior of reinforcement learning (RL) agents trained on a Bayesian imitative base policy. It demonstrates that even with a tight KL constraint, the agent can still exploit the base policy's uncertainty to achieve near-maximal reward, potentially leading to undesirable outcomes.",
                "paper-title": "RL, but don't do anything I wouldn't do",
                "image-path": "flux_paper_image/2410.06213_1728607165.png"
            },

            {
                "startTime": "45:48",
                "arxivId": "2410.06809",
                "arxivLink": "https://arxiv.org/abs/2410.06809",
                "title": "LLMs Get a Safety Upgrade: Decoding-Level Defense to the Rescue!",
                "institute": "Chinese Academy of Sciences, Renmin University of China, Tsinghua University...",
                "text": "This research introduces a novel defense mechanism called RDS (Root Defense Strategy) that operates at the decoding level of LLMs, focusing on the model's ability to recognize harmful outputs during the generation process. Unlike previous methods that rely on prefill-level analysis or single-point evaluation, RDS assesses the safety of each token as it's generated, allowing for more accurate and proactive security measures.",
                "paper-title": "Root Defence Strategies: Ensuring Safety of LLM at the Decoding Level",
                "image-path": "flux_paper_image/2410.06809_1728607523.png"
            },

            {
                "startTime": "46:10",
                "arxivId": "2410.05425",
                "arxivLink": "https://arxiv.org/abs/2410.05425",
                "title": "AI Designs Tiny Fire Detectors for Space!",
                "institute": "University of Antwerp, imec",
                "text": "This research uses a reinforcement learning-based Neural Architecture Search (NAS) agent to design a small neural network for active fire detection from multispectral satellite imagery. This approach differs from previous work by considering both the network's performance and its computational resource requirements.",
                "paper-title": "Designing a Classifier for Active Fire Detection from Multispectral Satellite Imagery Using Neural Architecture Search",
                "image-path": "flux_paper_image/2410.05425_1728608072.png"
            },

            {
                "startTime": "46:32",
                "arxivId": "2410.05499",
                "arxivLink": "https://arxiv.org/abs/2410.05499",
                "title": "Unitary Graph Convolutions: Wave Goodbye to Over-Smoothing!",
                "institute": "Harvard University",
                "text": "This paper introduces unitary graph convolutions, a new type of operation that uses unitary matrices to enhance the stability of graph neural networks. Unlike previous methods, this approach avoids over-smoothing, a common problem in deep graph networks where node representations converge too quickly, hindering performance.",
                "paper-title": "Unitary convolutions for learning on graphs and groups",
                "image-path": "flux_paper_image/2410.05499_1728607660.png"
            },

            {
                "startTime": "46:49",
                "arxivId": "2410.05665",
                "arxivLink": "https://arxiv.org/abs/2410.05665",
                "title": "Satellite Images: From Space to Speed, Edge Computing to the Rescue!",
                "institute": "CMU",
                "text": "This research proposes a hybrid edge-cloud collaborative architecture for satellite image analysis, where lightweight models on the satellite initially identify potential man-made structures, reducing the amount of data transmitted to the cloud for further processing. This approach differs from traditional \"bent-pipe\" methods by leveraging edge computing to optimize data transmission and processing time.",
                "paper-title": "Edge-Cloud Collaborative Satellite Image Analysis for Efficient Man-Made Structure Recognition",
                "image-path": "flux_paper_image/2410.05665_1728608560.png"
            },

            {
                "startTime": "47:12",
                "arxivId": "2410.04972",
                "arxivLink": "https://arxiv.org/abs/2410.04972",
                "title": "Color Me Creative: New AI Lets You Paint Videos With Words!",
                "institute": "Beijing University of Posts and Telecommunications, Peking University, Beijing Institute of Technology",
                "text": "This research introduces a language-based video colorization framework that uses user-provided text descriptions to guide the colorization process, unlike previous methods that rely on exemplars or post-processing.",
                "paper-title": "L-C4: Language-Based Video Colorization for Creative and Consistent Color",
                "image-path": "flux_paper_image/2410.04972_1728607857.png"
            },

            {
                "startTime": "47:29",
                "arxivId": "2410.04634",
                "arxivLink": "https://arxiv.org/abs/2410.04634",
                "title": "AI Art's Dirty Little Secret: Unmasking the Hidden Biases in Text-to-Image Models",
                "institute": "Harvard University",
                "text": "This research proposes a framework called Concept2Concept to audit text-to-image models by analyzing the distribution of concepts in generated images. Unlike previous work that focuses on specific biases, this framework allows for a more nuanced and comprehensive analysis of concept associations.",
                "paper-title": "Is What You Ask For What You Get? Investigating Concept Associations in Text-to-Image Models",
                "image-path": "flux_paper_image/2410.04634_1728604899.png"
            },

            {
                "startTime": "47:53",
                "arxivId": "2410.05564",
                "arxivLink": "https://arxiv.org/abs/2410.05564",
                "title": "Unsupervised Learning: How to Teach AI to See the World Like We Do",
                "institute": "Caltech, Harvard University, University of Amsterdam",
                "text": "This research proposes a new method for unsupervised representation learning from sequence data by factorizing transformations of latent variables into sparse components. Unlike previous work, this approach does not require supervision of input sequences and leverages the Helmholtz decomposition for more expressive latent flows.",
                "paper-title": "Unsupervised Representation Learning from Sparse Transformation Analysis",
                "image-path": "flux_paper_image/2410.05564_1728605458.png"
            },

            {
                "startTime": "48:18",
                "arxivId": "2410.06203",
                "arxivLink": "https://arxiv.org/abs/2410.06203",
                "title": "LLMs Learn to Plan Before They Write: A Single-Turn Approach to Long-Form Text Generation",
                "institute": "Google, Emory University",
                "text": "This research introduces a novel approach to long-form text generation by directly fine-tuning LLMs to generate the entire document in a single pass. Unlike previous methods that rely on sequential prompting, this approach leverages the token-level attention mechanism in the decoding process, ensuring coherence and consistency.",
                "paper-title": "Integrating Planning into Single-Turn Long-Form Text Generation",
                "image-path": "flux_paper_image/2410.06203_1728606780.png"
            },

            {
                "startTime": "48:39",
                "arxivId": "2410.06118",
                "arxivLink": "https://arxiv.org/abs/2410.06118",
                "title": "Multilingual Machine Translation: Learning to Learn the Right Way!",
                "institute": "HEIG-VD, HES-SO, Pi School...",
                "text": "This research explores using reinforcement learning to optimize the training schedule of multilingual neural machine translation (NMT) systems. Unlike previous work that focuses on static sampling strategies, this study proposes two algorithms, Teacher-Student Curriculum Learning (TSCL) and Deep Q Network (DQN), that dynamically adjust the order of language presentation during training based on the model's performance.",
                "paper-title": "Optimizing the Training Schedule of Multilingual NMT using Reinforcement Learning",
                "image-path": "flux_paper_image/2410.06118_1728604970.png"
            },

            {
                "startTime": "49:06",
                "arxivId": "2410.05522",
                "arxivLink": "https://arxiv.org/abs/2410.05522",
                "title": "Mesh-ing with AI: Predicting Stress Fields on Any Shape!",
                "institute": "CMU",
                "text": "This research proposes a method to predict scalar fields on arbitrary meshes using a convolutional neural network (CNN) with multi-resolution interpolation. Unlike previous work that relies on fixed grid domains, this approach allows for predictions on complex shapes with varying topology.",
                "paper-title": "Scalar Field Prediction on Meshes Using Interpolated Multi-Resolution Convolutional Neural Networks",
                "image-path": "flux_paper_image/2410.05522_1728607996.png"
            },

            {
                "startTime": "49:27",
                "arxivId": "2410.06845",
                "arxivLink": "https://arxiv.org/abs/2410.06845",
                "title": "AI Therapist in Training: Language Model Learns to Diagnose and Treat Mental Health",
                "institute": "University of Illinois Urbana-Champaign, Microsoft Research Asia, Stanford University",
                "text": "This research introduces MentalArena, a self-play framework for training language models to diagnose and treat mental health disorders. Unlike previous methods that rely on existing datasets or social media data, MentalArena generates its own personalized data through simulated patient-therapist interactions.",
                "paper-title": "MentalArena: Self-play Training of Language Models for Diagnosis and Treatment of Mental Health Disorders",
                "image-path": "flux_paper_image/2410.06845_1728607030.png"
            },

            {
                "startTime": "49:54",
                "arxivId": "2410.05298",
                "arxivLink": "https://arxiv.org/abs/2410.05298",
                "title": "LLMs: Graph Pattern Detectives, But Can They Crack the Code?",
                "institute": "Michigan State University, Hong Kong Polytechnic University, Microsoft",
                "text": "This research introduces a comprehensive benchmark to evaluate the capabilities of large language models (LLMs) in understanding and discovering graph patterns, a crucial aspect of graph mining that has been largely unexplored.",
                "paper-title": "How Do Large Language Models Understand Graph Patterns? A Benchmark for Graph Pattern Comprehension",
                "image-path": "flux_paper_image/2410.05298_1728605889.png"
            },

            {
                "startTime": "50:15",
                "arxivId": "2410.04659",
                "arxivLink": "https://arxiv.org/abs/2410.04659",
                "title": "AI's Got Zoomies: New Benchmark Tests If LLMs Can See the Big Picture",
                "institute": "Tsinghua University, Fudan University",
                "text": "This research introduces a new benchmark called ActiView, which specifically evaluates the active perception abilities of Multimodal Large Language Models (MLLMs). Unlike previous benchmarks that focus on static image comprehension, ActiView assesses how well LLMs can actively shift their \"view\" or zoom in on specific details within an image to answer questions.",
                "paper-title": "ActiView: Evaluating Active Perception Ability for Multimodal Large Language Models",
                "image-path": "flux_paper_image/2410.04659_1728605396.png"
            },

            {
                "startTime": "50:42",
                "arxivId": "2410.06153",
                "arxivLink": "https://arxiv.org/abs/2410.06153",
                "title": "LLM Agents: Lego for Brains, Assemble!",
                "institute": "Tsinghua University",
                "text": "This paper proposes a modular design space for LLM agents, allowing researchers to easily combine and reuse existing modules, rather than starting from scratch for each new task.",
                "paper-title": "AgentSquare: Automatic LLM Agent Search in Modular Design Space",
                "image-path": "flux_paper_image/2410.06153_1728609972.png"
            },

            {
                "startTime": "50:58",
                "arxivId": "2410.06366",
                "arxivLink": "https://arxiv.org/abs/2410.06366",
                "title": "Time-Reversal Symmetry: The Secret Sauce for Accurate Dynamical System Modeling",
                "institute": "UC Los Angeles, Stanford University",
                "text": "This research introduces a novel regularization term that enforces Time-Reversal Symmetry (TRS) within a GraphODE model. Unlike previous work that focuses on specific physical priors like energy conservation, this approach leverages TRS as a more general numerical benefit, improving accuracy across a wider range of dynamical systems.",
                "paper-title": "Physics-Informed Regularization for Domain-Agnostic Dynamical System Modeling",
                "image-path": "flux_paper_image/2410.06366_1728608112.png"
            },

            {
                "startTime": "51:17",
                "arxivId": "2410.06405",
                "arxivLink": "https://arxiv.org/abs/2410.06405",
                "title": "Vision Transformers Get a Spatial Makeover: Solving Abstract Reasoning with 2D Encodings",
                "institute": "University of Toronto",
                "text": "This research explores the use of Vision Transformers (ViT) for solving abstract visual reasoning tasks in the Abstraction and Reasoning Corpus (ARC). Unlike previous work that focused on program synthesis or language-based approaches, this paper investigates the potential of ViT for directly generating output images from input images. The authors propose a novel architecture called ViTARC, which incorporates 2D positional encodings and object-based positional encodings to enhance the spatial reasoning capabilities of ViT.",
                "paper-title": "Tackling the Abstraction and Reasoning Corpus with Vision Transformers: the Importance of 2D Representation, Positions, and Objects",
                "image-path": "flux_paper_image/2410.06405_1728606982.png"
            },

            {
                "startTime": "51:40",
                "arxivId": "2410.05357",
                "arxivLink": "https://arxiv.org/abs/2410.05357",
                "title": "LLM Scaling: From One to Many, A Recipe for a Model Zoo!",
                "institute": "UNC CH, UMD, UT Austin...",
                "text": "This research introduces Model-GLUE, a framework for scaling LLMs by combining pre-trained models. Unlike previous work that focuses on merging models with similar architectures, Model-GLUE explores both merging and mixture techniques to handle diverse model collections.",
                "paper-title": "Model-GLUE: Democratized LLM Scaling for A Large Model Zoo in the Wild",
                "image-path": "flux_paper_image/2410.05357_1728608119.png"
            },

            {
                "startTime": "52:09",
                "arxivId": "2410.06483",
                "arxivLink": "https://arxiv.org/abs/2410.06483",
                "title": "Predicting Diabetic Eye Trouble: A Deep Learning Ensemble Takes on the Challenge!",
                "institute": "University of Birmingham, University of Oxford",
                "text": "This research uses an ensemble of deep learning models to predict the onset of diabetic macular edema (DME) within a year using ultra-wide-field color fundus photography (UWF-CFP) images. This approach differs from previous studies that focused on diagnosing existing DME.",
                "paper-title": "Deep Learning Ensemble for Predicting Diabetic Macular Edema Onset Using Ultra-Wide Field Color Fundus Image",
                "image-path": "flux_paper_image/2410.06483_1728607930.png"
            },

            {
                "startTime": "52:37",
                "arxivId": "2410.04988",
                "arxivLink": "https://arxiv.org/abs/2410.04988",
                "title": "Reinforcement Learning Gets a Boost: Optimistic Thompson Sampling for Smarter Robots!",
                "institute": "University of Cambridge",
                "text": "This research introduces a new approach to optimistic exploration in model-based reinforcement learning. Unlike previous methods, it leverages a joint model of the reward and state distributions, allowing for more informed and efficient exploration.",
                "paper-title": "Efficient Model-Based Reinforcement Learning Through Optimistic Thompson Sampling",
                "image-path": "flux_paper_image/2410.04988_1728609234.png"
            },

            {
                "startTime": "52:57",
                "arxivId": "2410.06407",
                "arxivLink": "https://arxiv.org/abs/2410.06407",
                "title": "Skewness-Based Causal Discovery: A New Trick for Noisy Data",
                "institute": "UC San Diego, New York University, The University of Melbourne...",
                "text": "This research introduces a novel criterion for causal discovery in the presence of heteroscedastic noise, which is a common problem in real-world data. Unlike previous methods that rely on noise extraction or specific noise distribution assumptions, this approach leverages the skewness of the score function to identify causal directions.",
                "paper-title": "A Skewness-Based Criterion for Addressing Heteroscedastic Noise in Causal Discovery",
                "image-path": "flux_paper_image/2410.06407_1728605682.png"
            },

            {
                "startTime": "53:20",
                "arxivId": "2410.04642",
                "arxivLink": "https://arxiv.org/abs/2410.04642",
                "title": "Tuning Up Deep Learning: How Much Feature Learning is Too Much?",
                "institute": "Harvard University",
                "text": "This research investigates the effect of a hyperparameter called \"gamma\" on the performance of neural networks trained online. Unlike previous work that focused on offline training, this study explores the online setting, where data is not repeated.",
                "paper-title": "The Optimization Landscape of SGD Across the Feature Learning Strength",
                "image-path": "flux_paper_image/2410.04642_1728609537.png"
            },

            {
                "startTime": "53:41",
                "arxivId": "2410.06331",
                "arxivLink": "https://arxiv.org/abs/2410.06331",
                "title": "Deep Dive: Editing LLMs for Multi-Hop Reasoning, It's Not Just About the Surface!",
                "institute": "King Abdullah University of Science and Technology, Peking University, South China University of Technology",
                "text": "This research delves into the limitations of existing knowledge editing methods for multi-hop factual recall tasks. It identifies that these methods primarily focus on editing shallow layers of the model, neglecting deeper layers that are crucial for multi-hop reasoning. The paper proposes a novel approach, IFMET, which addresses this limitation by editing both shallow and deep layers.",
                "paper-title": "Locate-then-edit for Multi-hop Factual Recall under Knowledge Editing",
                "image-path": "flux_paper_image/2410.06331_1728606687.png"
            },

            {
                "startTime": "54:07",
                "arxivId": "2410.06488",
                "arxivLink": "https://arxiv.org/abs/2410.06488",
                "title": "Font-tastic! One-Step Chinese Font Synthesis with Super-Resolution",
                "institute": "Peking University",
                "text": "This research introduces a new method for few-shot Chinese font synthesis that uses a diffusion model with component-aware conditioning. Unlike previous methods that rely on GANs or pixel-space diffusion models, this approach operates in the latent space, leading to faster training and inference times.",
                "paper-title": "HFH-Font: Few-shot Chinese Font Synthesis with Higher Quality, Faster Speed, and Higher Resolution",
                "image-path": "flux_paper_image/2410.06488_1728605091.png"
            },

            {
                "startTime": "54:24",
                "arxivId": "2410.06473",
                "arxivLink": "https://arxiv.org/abs/2410.06473",
                "title": "Robot Brains Get a Language Boost: Talking to Machines Makes Them Smarter!",
                "institute": "CMU, Bosch",
                "text": "This research proposes a multi-agent framework that uses language models to guide robot policies, improving their performance without requiring additional human demonstrations or extensive training. This differs from previous work that often relies on fine-tuning models or handcrafted code interfaces.",
                "paper-title": "Grounding Robot Policies with Visuomotor Language Guidance",
                "image-path": "flux_paper_image/2410.06473_1728609842.png"
            },

            {
                "startTime": "54:46",
                "arxivId": "2410.06497",
                "arxivLink": "https://arxiv.org/abs/2410.06497",
                "title": "ERCache: Don't Infer, Just Cache It!",
                "institute": "Meta Platforms Inc.",
                "text": "This research investigates the necessity of performing model inference for every ad request in large-scale social networks, a question overlooked in previous work. It proposes ERCache, a caching framework that leverages user access patterns to reduce the number of inference requests.",
                "paper-title": "ERCache: An Efficient and Reliable Caching Framework for Large-Scale User Representations in Meta's Ads System",
                "image-path": "flux_paper_image/2410.06497_1728605805.png"
            },

            {
                "startTime": "55:05",
                "arxivId": "2410.04534",
                "arxivLink": "https://arxiv.org/abs/2410.04534",
                "title": "Music, Motion, and Text: A Unified Model for Multimodal Generation",
                "institute": "The Chinese University of Hong Kong, University of Washington, The University of British Columbia...",
                "text": "This research introduces UniMuMo, a unified multimodal model that can generate music, motion, and text in any combination. Unlike previous work that focused on unidirectional generation tasks, UniMuMo leverages a novel music-motion parallel generation scheme to enable simultaneous generation of music and motion.",
                "paper-title": "UniMuMo: Unified Text, Music and Motion Generation",
                "image-path": "flux_paper_image/2410.04534_1728609075.png"
            },

            {
                "startTime": "55:26",
                "arxivId": "2410.05063",
                "arxivLink": "https://arxiv.org/abs/2410.05063",
                "title": "AI Learns to Push Like a Pro: Neural Collapse in Robot Control",
                "institute": "Harvard University, ETH Z\u00fcrich",
                "text": "This research investigates the phenomenon of neural collapse in the context of image-based robot control, a task that involves continuous control outputs rather than discrete classifications. It proposes a novel \"control-oriented\" classification strategy to study the clustering of visual features in the representation space.",
                "paper-title": "Control-oriented Clustering of Visual Latent Representation",
                "image-path": "flux_paper_image/2410.05063_1728607203.png"
            },

            {
                "startTime": "55:47",
                "arxivId": "2410.06667",
                "arxivLink": "https://arxiv.org/abs/2410.06667",
                "title": "LLMs: From Code Writers to Code Runners, Can They Handle the Pressure?",
                "institute": "Mohamed bin Zayed University of Artificial Intelligence, Xinjiang University, University of Melbourne...",
                "text": "This research explores the use of LLMs as code executors, going beyond code generation to directly execute code snippets and return outputs. This differs from previous work that primarily focused on code generation or understanding.",
                "paper-title": "Large Language Models as Code Executors: An Exploratory Study",
                "image-path": "flux_paper_image/2410.06667_1728605135.png"
            },

            {
                "startTime": "56:11",
                "arxivId": "2410.05773",
                "arxivLink": "https://arxiv.org/abs/2410.05773",
                "title": "Remote Sensing Retrieval: When Simple Samples Just Don't Cut It!",
                "institute": "Tsinghua University",
                "text": "This research introduces a new metric learning approach called GLRTML that incorporates global statistical information during both training and testing phases. Unlike previous methods that rely on local sample relationships, GLRTML leverages the entire dataset to estimate the difficulty of sample pairs, guiding the network to focus on more challenging examples.",
                "paper-title": "GLRT-Based Metric Learning for Remote Sensing Object Retrieval",
                "image-path": "flux_paper_image/2410.05773_1728609821.png"
            },

            {
                "startTime": "56:31",
                "arxivId": "2410.05935",
                "arxivLink": "https://arxiv.org/abs/2410.05935",
                "title": "Manga Faces: One-Shot Detection with a Dash of Gaussian Noise!",
                "institute": "University of Tokyo",
                "text": "This research focuses on one-shot object detection in manga, a task not previously explored. It proposes a novel data augmentation method in feature space using Gaussian noise with learnable variances to address the challenges of large variations and long-tailed distributions of manga characters.",
                "paper-title": "Learning Gaussian Data Augmentation in Feature Space for One-shot Object Detection in Manga",
                "image-path": "flux_paper_image/2410.05935_1728605097.png"
            },

            {
                "startTime": "56:49",
                "arxivId": "2410.06191",
                "arxivLink": "https://arxiv.org/abs/2410.06191",
                "title": "Neural Networks: Overfitting Without the Guilt Trip!",
                "institute": "ETH Zurich",
                "text": "This research analyzes the generalization of two-layer ReLU networks trained by gradient flow in the NTK regime. Unlike previous work, it does not require the regression function to belong to the RKHS of the NTK.",
                "paper-title": "Benign Overfitting for Regression with Trained Two-Layer ReLU Networks",
                "image-path": "flux_paper_image/2410.06191_1728608939.png"
            },

            {
                "startTime": "57:09",
                "arxivId": "2410.07072",
                "arxivLink": "https://arxiv.org/abs/2410.07072",
                "title": "AI for 5G: Teaching Neural Networks Wireless Etiquette",
                "institute": "Virginia Tech, Massachusetts Institute of Technology",
                "text": "This research introduces a new method for configuring the weights of recurrent neural networks (RNNs) used in wireless communication systems. Unlike previous approaches that rely solely on training data, this method incorporates domain knowledge, such as channel statistics, to directly set the weights.",
                "paper-title": "Towards xAI: Configuring RNN Weights using Domain Knowledge for MIMO Receive Processing",
                "image-path": "flux_paper_image/2410.07072_1728607744.png"
            },

            {
                "startTime": "57:30",
                "arxivId": "2410.06340",
                "arxivLink": "https://arxiv.org/abs/2410.06340",
                "title": "FedGraph: Graph Learning's New Playground for Privacy-Preserving Models",
                "institute": "CMU, University of Illinois at Chicago, University of Southern California...",
                "text": "This research introduces FedGraph, a library specifically designed for federated graph learning, addressing the unique challenges of training graph neural networks on distributed data while preserving user privacy. Unlike existing federated learning libraries, FedGraph focuses on GNN training and supports various state-of-the-art methods, including communication between clients and a central server for model updates and information aggregation.",
                "paper-title": "FedGraph: A Research Library and Benchmark for Federated Graph Learning",
                "image-path": "flux_paper_image/2410.06340_1728608894.png"
            },

            {
                "startTime": "57:51",
                "arxivId": "2410.05448",
                "arxivLink": "https://arxiv.org/abs/2410.05448",
                "title": "Multitasking Makes Language Models Learn Faster: A Surprising Twist on In-Context Learning!",
                "institute": "Harvard University, Seoul National University, KRAFTON...",
                "text": "This research investigates the impact of task diversity on the training process of language models performing in-context learning. Unlike previous studies that focused on single-task learning, this paper demonstrates that training on multiple diverse tasks simultaneously shortens the learning plateaus, making each task easier to learn.",
                "paper-title": "Task Diversity Shortens the ICL Plateau",
                "image-path": "flux_paper_image/2410.05448_1728607456.png"
            },

            {
                "startTime": "58:10",
                "arxivId": "2410.06682",
                "arxivLink": "https://arxiv.org/abs/2410.06682",
                "title": "Video Captions Get a Makeover: LLM Learns to See and Hear!",
                "institute": "Tsinghua University",
                "text": "This research introduces a novel multi-round directed preference optimization (mrDPO) approach for training multimodal LLMs for video captioning. Unlike previous work that uses a single round of DPO, mrDPO periodically updates the reference model and incorporates guidance from ground-truth captions to stabilize the training process.",
                "paper-title": "Enhancing Multimodal LLM for Detailed and Accurate Video Captioning using Multi-Round Preference Optimization",
                "image-path": "flux_paper_image/2410.06682_1728606919.png"
            },

            {
                "startTime": "58:43",
                "arxivId": "2410.05626",
                "arxivLink": "https://arxiv.org/abs/2410.05626",
                "title": "Neural Networks: Random Initialization's Hidden Curse?",
                "institute": "Tsinghua University",
                "text": "This research investigates the impact of standard random initialization on the generalization ability of neural networks within the Neural Tangent Kernel (NTK) theory. Unlike previous work that focused on mirrored initialization, this study explores the implications of non-zero initial output functions.",
                "paper-title": "On the Impacts of the Random Initialization in the Neural Tangent Kernel Theory",
                "image-path": "flux_paper_image/2410.05626_1728607821.png"
            },

            {
                "startTime": "59:04",
                "arxivId": "2410.04818",
                "arxivLink": "https://arxiv.org/abs/2410.04818",
                "title": "Power Grids Get Smart: AI Solves the AC-OPF Problem in a Flash!",
                "institute": "ETH Zurich, International School for Advanced Studies",
                "text": "This research introduces PINCO, a physics-informed graph neural network that solves the AC-OPF problem without violating constraints. Unlike previous work, PINCO is unsupervised and can handle power systems with multiple generators per bus.",
                "paper-title": "Physics-Informed GNN for non-linear constrained optimization: PINCO a solver for the AC-optimal power flow",
                "image-path": "flux_paper_image/2410.04818_1728608846.png"
            },

            {
                "startTime": "59:22",
                "arxivId": "2410.06886",
                "arxivLink": "https://arxiv.org/abs/2410.06886",
                "title": "LLMs Get a Filter: Say Goodbye to Distracting Documents!",
                "institute": "Peking University",
                "text": "This paper introduces a novel approach called FltLM, which integrates a context filter with a Long-Context LLM. Unlike previous methods that rely on retrieval-based techniques, FltLM identifies and dynamically excludes irrelevant content within the input context, allowing the model to focus on pertinent information for better comprehension and reasoning.",
                "paper-title": "FltLM: An Intergrated Long-Context Large Language Model for Effective Context Filtering and Understanding",
                "image-path": "flux_paper_image/2410.06886_1728606154.png"
            },

            {
                "startTime": "59:55",
                "arxivId": "2410.05116",
                "arxivLink": "https://arxiv.org/abs/2410.05116",
                "title": "Stable Diffusion Gets a Human Touch: New AI Learns From Your Feedback, Not Just Data!",
                "institute": "Sony AI, National Taiwan University, University of Southern California...",
                "text": "This research introduces a new framework called HERO that fine-tunes Stable Diffusion models using online human feedback. Unlike previous methods that rely on predefined reward functions or pretrained reward models, HERO learns from human feedback collected on the fly during model training.",
                "paper-title": "Human-Feedback Efficient Reinforcement Learning for Online Diffusion Model Finetuning",
                "image-path": "flux_paper_image/2410.05116_1728609316.png"
            }
    ],
    "stats": {
        "num_pick": 261,
        "num_total": 959,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202410101956_audio.mp3"
}