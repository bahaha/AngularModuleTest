module.exports= function($scope, $state, TestService){
		console.log('enter controller_215')
		$scope.test = TestService.getTest()
	}
